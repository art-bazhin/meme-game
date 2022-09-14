import { nanoid } from 'nanoid';
import { HostController } from './model/host-controller';
import { PlayerController } from './model/player-controller';

const hash = location.hash.substring(1);
const hashTuple = hash.split('/');

const isHost = hashTuple[0] === 'host';
const isPlayer = hashTuple[0] === 'play';
const roomId = hashTuple[1];

const USER_ID = localStorage.getItem('USER_ID') || nanoid();
localStorage.setItem('USER_ID', USER_ID);

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
