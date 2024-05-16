import { Server } from "socket.io";

const SocketHandler = (req, res) => {
  console.log("> [api/socket] Socket handler called...")
  if (res.socket.server.io) {
    console.log("Socket already exists, skipping...");
  } else {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("> Server is connected...");
      socket.on('join-room', (roomId, userId) => {
        console.log(`A new user joined room: ${roomId}, with id: ${userId}...`);
        socket.join(roomId);
        socket.broadcast.to(roomId).emit('user-connected', userId);
      });
    });
  }

  res.end();
};

export default SocketHandler;