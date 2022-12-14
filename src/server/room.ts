import { Server, Socket } from 'socket.io';
import { Action } from '../common/action.js';
import { Answer } from '../common/answer';
import { GameStage } from '../common/game-stage.js';
import { Player } from '../common/player';
import { PlayerStatus } from '../common/player-status.js';
import { RoomError } from '../common/room-error.js';
import { RoomState } from '../common/room-state';
import { CARDS } from './cards.js';
import { Caption, CAPTIONS } from './captions.js';
import { shuffleCopy } from './utils.js';
import { CARDS_PER_PLAYER } from '../common/constants.js';

const ROOM_EXPIRED_TIME = 30 * 60 * 1000;
const WAIT_FOR_OFFLINE_TIME = 30 * 1000;
const MIN_PLAYERS = 2;

export class Room {
  static rooms: Record<string, Room> = {};

  static host(io: Server, id: string) {
    let room: Room;

    if (Room.rooms[id]) {
      room = Room.rooms[id];
    } else {
      room = new Room(io, id);
      Room.rooms[id] = room;
    }

    return room;
  }

  static get(id: string) {
    return Room.rooms[id];
  }

  private questions: Caption[] = [];
  private cards: string[] = [];
  private maxRounds = 0;
  private expiredTimeout: NodeJS.Timeout | undefined;
  private waitForPendingTimer: NodeJS.Timer | undefined;

  private stage: GameStage = GameStage.Lobby;
  private answers: Answer[] = [];
  private answerIndex = -1;
  private question = '';
  private round = 0;
  private wait = 0;

  private players: Record<string, Player> = {};

  private get playerIds() {
    return Object.keys(this.players);
  }

  private getPlayers(...statuses: PlayerStatus[]): Player[];
  private getPlayers(): Player[];
  private getPlayers(...statuses: any): Player[] {
    return this.playerIds.reduce<Player[]>((playerList, id) => {
      const player = this.players[id];

      if (!statuses.length || statuses.includes(player.status)) {
        playerList.push(player);
      }

      return playerList;
    }, []);
  }

  private get onlinePlayers() {
    return this.getPlayers(PlayerStatus.Online);
  }

  private get pendingPlayers() {
    return this.getPlayers(PlayerStatus.Pending);
  }

  private get state(): RoomState {
    return {
      id: this.id,
      maxRounds: this.maxRounds,
      stage: this.stage,
      players: this.players,
      answers: this.answers,
      answerIndex: this.answerIndex,
      caption: this.question,
      round: this.round,
      wait: this.wait,
    };
  }

  constructor(private io: Server, private id: string) {
    this.initExpiredTimeout();
    console.log('Created Room ' + id);
  }

  public connect(playerId: string, name: string) {
    const player = this.players[playerId];

    if (player) {
      player.status = PlayerStatus.Online;
    } else {
      const newPlayer = {
        id: playerId,
        name,
        cards: [],
        score: 0,
        status: PlayerStatus.Online,
        done: false,
      };

      if (this.stage !== GameStage.Lobby) this.giveCards(newPlayer);

      this.players[playerId] = newPlayer;
    }

    this.emitNext();
  }

  public disconnect(playerId: string) {
    if (this.stage === GameStage.Lobby) {
      delete this.players[playerId];
    } else {
      const player = this.players[playerId];
      if (player) player.status = PlayerStatus.Pending;
    }

    this.emitNext();
  }

  public emitError(error: RoomError, socket?: Socket) {
    const target = socket ? socket : this.io.to(this.id);
    target.emit(Action.RoomUpdate, { error });
    this.initExpiredTimeout();
  }

  public emit(socket?: Socket) {
    const target = socket ? socket : this.io.to(this.id);
    target.emit(Action.RoomUpdate, this.state);
    this.initExpiredTimeout();
  }

  public startGame(maxRounds = 0) {
    const hasPlayers = this.getPlayers(PlayerStatus.Online).length > 1;
    const isLobbyStage = this.stage === GameStage.Lobby;
    const isFinalStage =
      this.stage === GameStage.Results &&
      this.maxRounds &&
      this.maxRounds === this.round;

    if (hasPlayers && (isLobbyStage || isFinalStage)) {
      this.questions = shuffleCopy(CAPTIONS);
      this.cards = shuffleCopy(CARDS);
      this.maxRounds = maxRounds;

      for (let id in this.players) {
        const player = this.players[id];
        if (player) this.giveCards(player);
      }

      this.goToNextStage();
    }
  }

  public goToNextStage() {
    clearInterval(this.waitForPendingTimer);
    this.wait = 0;

    const votesDone = this.answerIndex === this.answers.length - 1;

    this.stage = {
      [GameStage.Lobby]: GameStage.Question,
      [GameStage.Question]: GameStage.Vote,
      [GameStage.Vote]: votesDone ? GameStage.Results : GameStage.Vote,
      [GameStage.Results]: GameStage.Question,
    }[this.stage];

    switch (this.stage) {
      case 'QUESTION':
        const question = this.questions.shift()!;

        this.questions.push(question);
        this.question = question.ru;
        this.round =
          this.maxRounds && this.round === this.maxRounds ? 0 : this.round + 1;

        break;

      case 'VOTE':
        this.answerIndex++;
        break;

      case GameStage.Results:
        for (let answer of this.answers) {
          const { playerId, votes, card } = answer;
          const player = this.players[playerId];

          if (player) {
            const i = player.cards.indexOf(card);
            const newCard = this.cards.shift();

            if (i > -1 && newCard) player.cards[i] = newCard;
            this.cards.push(card);

            player.score = votes.reduce((score, vote) => {
              return score + vote.score;
            }, player.score);
          }
        }

        this.answers = [];
        this.answerIndex = -1;

        break;
    }

    const currentAnswer = this.answers[this.answerIndex];

    for (let id in this.players) {
      const player = this.players[id];

      player.done = !!(
        this.stage === 'VOTE' &&
        currentAnswer &&
        currentAnswer.playerId === id
      );

      if (player.status === PlayerStatus.Pending) {
        player.status = PlayerStatus.Offline;
      }
    }

    this.emit();
  }

  public receiveData(playerId: string, payload: any) {
    if (this.stage === GameStage.Lobby) return;

    switch (this.stage) {
      case GameStage.Question:
        if (
          typeof payload !== 'string' ||
          !this.players[playerId]?.cards.includes(payload)
        )
          return;

        const playerAnswer = this.answers.find(
          (answer) => answer.playerId === playerId
        );

        if (playerAnswer) {
          playerAnswer.card = payload;
        } else {
          this.answers.push({
            playerId,
            card: payload,
            votes: [],
          });
        }

        break;

      case GameStage.Vote:
        if (typeof payload !== 'number' || payload < 0 || payload > 2) return;

        const answer = this.answers[this.answerIndex];

        if (answer.playerId === playerId) return;

        const vote = answer.votes.find((v) => v.playerId === playerId);

        if (vote) {
          vote.score = payload;
        } else {
          answer.votes.push({
            playerId,
            score: payload,
          });
        }

        break;
    }

    const player = this.players[playerId];
    if (player) player.done = true;

    this.emitNext();
  }

  private initExpiredTimeout() {
    clearTimeout(this.expiredTimeout);

    this.expiredTimeout = setTimeout(() => {
      console.log('Expired Room ' + this.id);
      this.emitError(RoomError.Expired);
      this.close();
    }, ROOM_EXPIRED_TIME);
  }

  private giveCards(player: Player) {
    player.cards = [];

    for (let i = 0; i < CARDS_PER_PLAYER; i++) {
      const card = this.cards.shift();
      if (card) player.cards.push(card);
    }
  }

  private close() {
    clearTimeout(this.expiredTimeout);
    clearInterval(this.waitForPendingTimer);
    delete Room.rooms[this.id];
    this.emitError(RoomError.Expired);
  }

  private waitForPendingPlayers() {
    clearInterval(this.waitForPendingTimer);

    const interval = 1000;

    this.wait = WAIT_FOR_OFFLINE_TIME;
    this.emit();

    this.waitForPendingTimer = setInterval(() => {
      this.wait -= interval;

      if (!this.wait) {
        this.goToNextStage();
        return;
      }

      this.emit();
    }, interval);
  }

  private emitNext() {
    clearInterval(this.waitForPendingTimer);
    this.wait = 0;

    if (this.stage === GameStage.Lobby) {
      this.emit();
      return;
    }

    const { onlinePlayers, pendingPlayers } = this;

    if (
      onlinePlayers.length >= MIN_PLAYERS &&
      onlinePlayers.every((player) => player.done)
    ) {
      if (!pendingPlayers.every((player) => player.done))
        this.waitForPendingPlayers();
      else this.goToNextStage();

      return;
    }

    this.emit();
  }
}
