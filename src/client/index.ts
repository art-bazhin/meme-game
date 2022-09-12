import { io } from 'socket.io-client';

const socket = io('ws://localhost:3000', {
  reconnectionDelayMax: 10000,
});

socket.on('connect', () => {
  console.log('qwe');
});
