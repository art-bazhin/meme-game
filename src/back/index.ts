import { Server } from 'socket.io';

const io = new Server({
  cors: {
    origin: 'http://localhost:1234',
  },
});

io.listen(3000);

io.on('connect', () => {
  console.log('connected');
});
