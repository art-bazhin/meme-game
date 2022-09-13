import { io } from 'socket.io-client';
import { nanoid } from 'nanoid';
import { Action } from '../common/action';

// socket.on('connect', () => {
//   socket.emit(Action.HostRoom, nanoid());
// });

// socket.on(Action.UpdateRoom, (payload) => console.log(payload));

const hash = location.hash;

const isHost = hash.indexOf('#host') === 0;
const isPlay = hash.indexOf('#play') === 0;
const roomId = hash.substring(5);

function host(roomId: string) {
  const socket = io('ws://localhost:3000', {
    reconnectionDelayMax: 10000,
    query: { type: 'host', roomId },
  });

  socket.on(Action.StateChange, (state) => {
    document.body.innerHTML = `<pre>${JSON.stringify(state, null, 2)}</pre>`;
  });
}

function play(roomId: string, playerId: string, name: string) {
  const socket = io('ws://localhost:3000', {
    reconnectionDelayMax: 10000,
    query: { type: 'play', roomId, playerId, name },
  });

  socket.on(Action.StateChange, (state) => console.log(state));
}

if (roomId) {
  if (isHost) host(roomId);
  if (isPlay) play(roomId, 'test-id', 'John Doe');
}
