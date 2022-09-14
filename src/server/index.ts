import { Server } from 'socket.io';
import { on } from 'spred';
import { Action } from '../common/action.js';
import { Room } from './room.js';

const io = new Server({
  cors: {
    origin: 'http://localhost:1234',
  },
});

io.on('connection', (socket) => {
  const { type, roomId, playerId, playerName } = socket.handshake
    .query as Record<string, string>;

  if (type === 'host') {
    const room = Room.host(io, roomId);

    socket.join(roomId);
    room.emit(socket);

    socket.on(Action.Start, (maxRounds) => room.startGame(maxRounds));

    return;
  }

  if (type === 'player') {
    const room = Room.get(roomId);

    if (!room) return;

    socket.join(roomId);
    room.connect(playerId, playerName);

    socket.on('disconnect', () => room.disconnect(playerId));

    socket.on(Action.Answer, (card) => room.addAnswer(playerId, card));

    return;
  }
});

io.listen(3000);
