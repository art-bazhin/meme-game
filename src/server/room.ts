import { Server, Socket } from 'socket.io';
import { computed, on, Signal, store, writable } from 'spred';
import { Action } from '../common/action.js';
import { Answer } from '../common/answer';
import { Player } from '../common/player';
import { RoomState } from '../common/room-state';
import { Stage } from '../common/stage';

const ROOM_EXPIRED_TIME = 10000; //30 * 60 * 1000;

export class Room {
  static rooms: Record<string, Room> = {};

  static host(io: Server, id: string, maxRounds?: number) {
    let room: Room;

    if (Room.rooms[id]) {
      room = Room.rooms[id];
    } else {
      const mr = maxRounds && maxRounds > 0 ? maxRounds : Infinity;
      room = new Room(io, id, mr);
      Room.rooms[id] = room;
    }

    return room;
  }

  static get(id: string) {
    return Room.rooms[id];
  }

  private stage = writable<Stage>('LOBBY');
  private players = store<Record<string, Player>>({});
  private answers = store<Answer[]>([]);
  private answerIndex = writable(-1);
  private question = writable('');
  private round = 0;

  private state: Signal<RoomState> = computed(() => ({
    id: this.id,
    stage: this.stage(),
    players: this.players(),
    answers: this.answers(),
    answerIndex: this.answerIndex(),
    question: this.question(),
  }));

  private dispose: () => void;
  private sessionTimeoutId: NodeJS.Timeout | null = null;

  constructor(
    private io: Server,
    private id: string,
    private maxRounds: number
  ) {
    this.dispose = on(this.state, (state) => {
      this.initTimeout();
      this.emit();
      if (state.stage === 'END') this.close();
    });

    this.initTimeout();
  }

  public connect(playerId: string, name: string) {
    this.players.update(playerId, (player) => {
      if (player) player.online = true;
      else
        return {
          id: playerId,
          name,
          cards: [],
          score: 0,
          online: true,
        };
    });
  }

  public disconnect(playerId: string) {
    this.players.update(playerId, (player) => {
      if (player) player.online = false;
    });
  }

  public emit(socket?: Socket) {
    const target = socket ? socket : this.io.to(this.id);
    target.emit(Action.StateChange, this.state.sample());
  }

  private initTimeout() {
    if (this.sessionTimeoutId) clearTimeout(this.sessionTimeoutId);
    this.sessionTimeoutId = setTimeout(() => this.close(), ROOM_EXPIRED_TIME);
  }

  private close() {
    if (this.sessionTimeoutId) clearTimeout(this.sessionTimeoutId);
    this.dispose();
    delete Room.rooms[this.id];
  }

  // private nextStage() {
  //   switch (this.stage()) {
  //     case 'LOBBY':
  //     case 'RESULTS':
  //       this.stage('QUESTION');
  //       this.round++;
  //       break;

  //     case 'QUESTION':
  //       this.stage('VOTE');
  //       break;

  //     case 'VOTE':
  //       if (this.round === this.maxRounds) this.stage('END');
  //       else this.stage('RESULTS');
  //       break;
  //   }
  // }
}
