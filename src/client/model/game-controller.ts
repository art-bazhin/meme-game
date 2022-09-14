import { io, Socket } from 'socket.io-client';
import { computed, memo, signal, Signal, store, writable } from 'spred';
import { Action } from '../../common/action';
import { ClientType } from '../../common/client-type';
import { RoomError } from '../../common/room-error';
import { RoomState } from '../../common/room-state';

const isLocalHost = location.origin === 'http://localhost:1234';

const WS_URL = isLocalHost ? 'ws://localhost:3000' : '';

export class GameController {
  private socket: Socket;
  protected playerId;

  private readonly _pending = writable(false);
  public readonly pending = memo(this._pending);

  protected readonly _state = store<RoomState>({ loading: true } as RoomState);
  public readonly state = computed(this._state);

  public readonly loading = memo(() => this.state().loading);
  public readonly stage = memo(() => this.state().stage);
  public readonly error = memo(() => this.state().error);

  public readonly voteCard = memo(() => {
    const state = this.state();
    const currentAnswer = state.answers[state.answerIndex];

    return currentAnswer ? currentAnswer.card : '';
  });

  public readonly playerList = computed(() => {
    const players = this.state().players;
    const ids = Object.keys(players);

    return ids.map((id) => players[id]);
  });

  public readonly sortedPlayerList = computed(() => {
    const list = this.playerList().slice();
    list.sort((a, b) => a.score - b.score);

    return list;
  });

  constructor(
    type: ClientType,
    roomId: string,
    playerId?: string,
    playerName?: string
  ) {
    this.socket = io(WS_URL, {
      reconnectionDelayMax: 10000,
      query: { type, roomId, playerId, playerName },
    });

    this.playerId = playerId || '';
    this.socket.on(Action.RoomUpdate, (state) => {
      this._state.update(state);
      this._pending(false);
    });
  }

  protected emit(action: Action, payload?: any) {
    this._pending(true);
    this.socket.emit(action, payload);
  }
}
