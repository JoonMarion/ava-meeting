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
    });
  }

  res.end();
};

export default SocketHandler;