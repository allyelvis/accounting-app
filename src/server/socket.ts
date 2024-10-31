import { Server } from "socket.io";

const ioHandler = (req, res) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      socket.on("update-data", (data) => {
        socket.broadcast.emit("data-updated", data);
      });
    });
  }
  res.end();
};

export default ioHandler;
