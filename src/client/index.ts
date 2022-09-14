import { io, Socket } from 'socket.io-client';
import { nanoid } from 'nanoid';
import { Action } from '../common/action';
import { signal, Signal, writable } from 'spred';
import { RoomState } from '../common/room-state';

const WS_URL = 'ws://localhost:3000';

// socket.on('connect', () => {
//   socket.emit(Action.HostRoom, nanoid());
// });

// socket.on(Action.UpdateRoom, (payload) => console.log(payload));

const hash = location.hash.substring(1);
const hashTuple = hash.split('/');

const isHost = hashTuple[0] === 'host';
const isPlayer = hashTuple[0] === 'player';
const roomId = hashTuple[1];

const USER_ID = localStorage.getItem('USER_ID') || nanoid();
localStorage.setItem('USER_ID', USER_ID);

class GameController {
  protected socket: Socket;
  protected playerId;

  public readonly state: Signal<RoomState | null>;

  constructor(
    type: 'host' | 'player',
    roomId: string,
    playerId?: string,
    playerName?: string
  ) {
    this.socket = io(WS_URL, {
      reconnectionDelayMax: 10000,
      query: { type, roomId, playerId, playerName },
    });

    this.playerId = playerId || '';

    const [state, setState] = signal<RoomState | null>(null);

    this.state = state;
    this.socket.on(Action.RoomUpdate, setState);
  }
}

class HostController extends GameController {
  constructor(roomId: string) {
    super('host', roomId);
  }

  public startGame(maxRounds = 0) {
    const state = this.state();

    if (state && state.stage === 'LOBBY') {
      this.socket.emit(Action.Start, maxRounds);
    }
  }
}

class PlayerController extends GameController {
  constructor(roomId: string, playerId: string, playerName: string) {
    super('player', roomId, playerId, playerName);
  }

  public answer(payload?: any) {
    const state = this.state();
    if (!state || state.stage === 'LOBBY') return;
    this.socket.emit(Action.Answer, payload);
  }
}

function host(roomId: string) {
  const controller = new HostController(roomId);
  (window as any).controller = controller;

  controller.state.subscribe((state) => {
    document.body.innerHTML = `<pre>${JSON.stringify(state, null, 2)}</pre>`;
  });
}

function play(roomId: string, playerId: string, playerName: string) {
  const controller = new PlayerController(roomId, playerId, playerName);
  (window as any).controller = controller;

  controller.state.subscribe((state) => {
    document.body.innerHTML = `<pre>${JSON.stringify(state, null, 2)}</pre>`;
  });
}

if (roomId) {
  if (isHost) host(roomId);
  if (isPlayer) play(roomId, USER_ID, 'John Doe');
}
