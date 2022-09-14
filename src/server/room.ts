import { Server, Socket } from 'socket.io';
import { batch, computed, on, Signal, writable } from 'spred';
import { Action } from '../common/action.js';
import { Answer } from '../common/answer';
import { Player } from '../common/player';
import { RoomState } from '../common/room-state';
import { Stage } from '../common/stage';
import { CARDS } from './cards.js';
import { Question, QUESTIONS } from './questions.js';
import { shuffleCopy } from './utils.js';

const ROOM_EXPIRED_TIME = 30 * 60 * 1000;
const CARDS_PER_PLAYER = 5;
const WAIT_FOR_OFFLINE_TIME = 30 * 1000;

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

  private questions: Question[] = [];
  private cards: string[] = [];
  private maxRounds = 0;
  private dispose: () => void;
  private sessionTimeoutId: NodeJS.Timeout | undefined;
  private waitForOfflineId: NodeJS.Timer | undefined;

  private stage = writable<Stage>('LOBBY');
  private answers = writable<Answer[]>([]);
  private answerIndex = writable(-1);
  private question = writable('');
  private round = writable(0);
  private wait = writable(0);

  private players = writable<Record<string, Player | undefined>>({});

  private playerIds = computed(() => Object.keys(this.players()));

  private onlinePlayers = computed(() => {
    const players = this.players();
    const ids = this.playerIds();

    return ids.reduce<Player[]>((onlinePlayers, id) => {
      if (players[id]?.online) onlinePlayers.push(players[id]!);
      return onlinePlayers;
    }, []);
  });

  private state: Signal<RoomState> = computed(() => ({
    id: this.id,
    maxRounds: this.maxRounds,
    stage: this.stage(),
    players: this.players(),
    answers: this.answers(),
    answerIndex: this.answerIndex(),
    question: this.question(),
    round: this.round(),
    wait: this.wait(),
  }));

  constructor(private io: Server, private id: string) {
    this.dispose = on(this.state, (state) => {
      this.initTimeout();
      this.emit();
    });

    on(this.wait, (timeLeft) => {
      if (!timeLeft) {
        clearInterval(this.waitForOfflineId);
      }
    });

    this.initTimeout();
  }

  public connect(playerId: string, name: string) {
    batch(() => {
      this.players((players) => {
        const player = players[playerId];

        if (player) {
          player.online = true;
        } else {
          const newPlayer = {
            id: playerId,
            name,
            cards: [],
            score: 0,
            online: true,
            done: false,
          };

          if (this.stage() !== 'LOBBY') this.giveCards(newPlayer);

          players[playerId] = newPlayer;
        }

        return players;
      });

      this.wait(0);
    });
  }

  public disconnect(playerId: string) {
    this.players((players) => {
      if (this.stage() === 'LOBBY') {
        delete players[playerId];
      } else {
        const player = players[playerId];
        if (player) player.online = false;
      }

      return players;
    });

    if (this.stage() === 'LOBBY') return;

    if (this.onlinePlayers().every((player) => player.done)) {
      this.waitForOfflinePlayers();
    }
  }

  public emit(socket?: Socket) {
    const target = socket ? socket : this.io.to(this.id);
    target.emit(Action.StateChange, this.state.sample());
  }

  public startGame(maxRounds = 0) {
    const hasPlayers = this.onlinePlayers().length > 1;
    const isLobbyStage = this.stage() === 'LOBBY';
    const isFinalStage =
      this.stage() === 'RESULTS' && this.round() === this.maxRounds;

    if (hasPlayers && (isLobbyStage || isFinalStage)) {
      this.questions = shuffleCopy(QUESTIONS);
      this.cards = shuffleCopy(CARDS);
      this.maxRounds = maxRounds;

      batch(() => {
        this.players((players) => {
          for (let id in players) {
            const player = players[id];
            if (player) this.giveCards(player);
          }

          return players;
        });

        this.nextStage();
      });
    }
  }

  public nextStage() {
    const votesDone = this.answerIndex() === this.answers().length - 1;

    console.log('VD', votesDone);

    let nextStage = {
      LOBBY: 'QUESTION',
      QUESTION: 'VOTE',
      VOTE: votesDone ? 'RESULTS' : 'VOTE',
      RESULTS: 'QUESTION',
    }[this.stage()] as Stage;

    batch(() => {
      switch (nextStage) {
        case 'QUESTION':
          const question = this.questions.shift()!;

          this.questions.push(question);
          this.question(question.ru);
          this.round((v) => (v === this.maxRounds ? 0 : v + 1));

          break;

        case 'VOTE':
          this.answerIndex((i) => i + 1);
          break;

        case 'RESULTS':
          this.answers((answers) => {
            for (let answer of answers) {
              const { playerId, votes, card } = answer;
              const player = this.players()[playerId];

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

            return [];
          });

          this.answerIndex(-1);

          break;
      }

      this.stage(nextStage);
      this.wait(0);
      this.players((players) => {
        const currentAnswer = this.answers()[this.answerIndex() + 1];

        for (let id in players) {
          players[id]!.done = !!(
            nextStage === 'VOTE' &&
            currentAnswer &&
            currentAnswer.playerId === id
          );
        }

        return players;
      });
    });
  }

  public addAnswer(playerId: string, payload: any) {
    if (this.stage() === 'LOBBY') return;

    batch(() => {
      switch (this.stage()) {
        case 'QUESTION':
          this.answers((answers) => {
            const index = answers.findIndex((el) => el.playerId === playerId);

            if (index >= 0) answers[index].card = payload;
            else
              answers.push({
                playerId,
                card: payload,
                votes: [],
              });

            return answers;
          });
          break;

        case 'VOTE':
          this.answers((answers) => {
            const answer = answers[this.answerIndex()];

            if (answer.playerId === playerId) return answers;

            const vote = answer.votes.find((v) => v.playerId === playerId);

            if (vote) vote.score = payload;
            else
              answer.votes.push({
                playerId,
                score: payload,
              });

            return answers;
          });

          break;
      }

      this.players((players) => {
        const player = players[playerId];
        if (player) player.done = true;

        return players;
      });
    });

    const onlinePlayers = this.onlinePlayers();

    if (onlinePlayers.every((player) => player.done)) {
      if (onlinePlayers.length === this.playerIds().length) {
        this.nextStage();
      } else {
        this.waitForOfflinePlayers();
      }
    }
  }

  private initTimeout() {
    clearTimeout(this.sessionTimeoutId);
    this.sessionTimeoutId = setTimeout(() => this.close(), ROOM_EXPIRED_TIME);
  }

  private giveCards(player: Player) {
    player.cards = [];

    for (let i = 0; i < CARDS_PER_PLAYER; i++) {
      const card = this.cards.shift();
      if (card) player.cards.push(card);
    }
  }

  private close() {
    clearTimeout(this.sessionTimeoutId);
    clearInterval(this.waitForOfflineId);
    this.dispose();
    delete Room.rooms[this.id];
  }

  private waitForOfflinePlayers() {
    clearInterval(this.waitForOfflineId);
    this.wait(WAIT_FOR_OFFLINE_TIME);

    const interval = 1000;

    this.waitForOfflineId = setInterval(() => {
      this.wait((t) => {
        const timeLeft = t - interval;
        if (!timeLeft) this.nextStage();
        return timeLeft;
      });
    }, interval);
  }
}
