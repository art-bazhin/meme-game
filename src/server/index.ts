import { Server } from 'socket.io';
import { Action } from '../common/action.js';
import { Room } from './room.js';

const io = new Server({
  cors: {
    origin: 'http://localhost:1234',
  },
});

io.on('connection', (socket) => {
  const { type, roomId, maxRounds, playerId, playerName } = socket.handshake
    .query as Record<string, string>;

  if (type === 'host') {
    const room = Room.host(io, roomId, +maxRounds);

    socket.join(roomId);
    room.emit(socket);

    return;
  }

  if (type === 'play') {
    const room = Room.get(roomId);
    if (!room) return;

    socket.join(roomId);
    room.connect(playerId, playerName);

    socket.on('disconnect', () => room.disconnect(playerId));

    return;
  }
});

io.listen(3000);
