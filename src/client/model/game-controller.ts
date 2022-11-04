import { computed, store, writable } from 'spred';
import { io, Socket } from 'socket.io-client';
import { Action } from '../../common/action';
import { ClientType } from '../../common/client-type';
import { RoomState } from '../../common/room-state';
import { getPlayLink } from './routing';

const isLocalHost = location.origin === 'http://localhost:1234';

const WS_URL = isLocalHost ? 'ws://localhost:3000' : '';

export class GameController {
  private socket: Socket;
  protected playerId;

  private readonly _pending = writable(false);
  public readonly pending = computed(this._pending);

  protected readonly _state = store<RoomState>({ loading: true } as RoomState);
  public readonly state = computed(this._state);

  public readonly roomId = computed(() => this.state().id);
  public readonly playLink = computed(() => getPlayLink(this.roomId()));

  public readonly loading = computed(() => this.state().loading || false);
  public readonly stage = computed(() => this.state().stage);
  public readonly error = computed(() => this.state().error);

  public readonly votedAnswer = computed(() => {
    const state = this.state();
    return state.answers[state.answerIndex];
  });

  public readonly votedCard = computed(() => {
    return this.votedAnswer().card;
  });

  public readonly votes = computed(() => {
    return this.votedAnswer().votes;
  });

  public readonly playersList = computed(() => {
    const players = this.state().players;
    const ids = Object.keys(players);

    return ids.map((id) => players[id]);
  });

  public readonly sortedPlayerList = computed(() => {
    const list = this.playersList().slice();
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
