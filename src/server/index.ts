import { Server, Socket } from 'socket.io';
import { Action } from '../common/action.js';
import { ClientType } from '../common/client-type.js';
import { RoomError } from '../common/room-error.js';
import { Room } from './room.js';

const io = new Server({
  cors: {
    origin: 'http://localhost:1234',
  },
});

io.on('connection', (socket) => {
  const { type, roomId, playerId, playerName } = socket.handshake
    .query as Record<string, string>;

  switch (type) {
    case ClientType.Host:
      setupHost(socket, roomId);
      break;

    case ClientType.Player:
      setupPlayer(socket, roomId, playerId, playerName);
      break;
  }
});

io.listen(3000);

function setupHost(socket: Socket, roomId: string) {
  const room = Room.host(io, roomId);

  socket.join(roomId);
  room.emit(socket);

  socket.on(Action.StartGame, (maxRounds) => room.startGame(maxRounds));
}

function setupPlayer(
  socket: Socket,
  roomId: string,
  playerId: string,
  playerName: string
) {
  const room = Room.get(roomId);

  if (!room) {
    socket.emit(Action.RoomUpdate, { error: RoomError.NotFound });
    return;
  }

  socket.join(roomId);
  room.connect(playerId, playerName);

  socket.on('disconnect', () => room.disconnect(playerId));
  socket.on(Action.PlayerData, (payload) =>
    room.receiveData(playerId, payload)
  );
}
