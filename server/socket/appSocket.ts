import express from "express";
import https from "https";
import fs from "fs";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = https.createServer(
  {
    key: fs.readFileSync("../../ctceth_ssl/private.key"),
    cert: fs.readFileSync("../../ctceth_ssl/certificate.crt"),
  },
  app
);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

app.use(cors());

io.on("connection", (socket) => {
  console.log("New connection connected");

  socket.on("join room", (room) => {
    socket.join(room);
  });

  socket.on("chat message", (msg, room) => {
    console.log("message: " + msg);
    // io.emit("chat message", `got your message {${msg}}!`); // This will emit the event to all connected sockets
    // socket.broadcast.emit("chat message", msg); // send a message to every connected client except for the one triggering the event
    socket.to(room).emit("chat message", msg); // send a message to specified room
  });

  socket.on("disconnect", () => {
    console.log("one connection disconnected");
    // socket.broadcast.emit("chat message", "Someone is offline......");
  });
});

server.listen(8080, () => {
  console.log("Socket server is listening on port:8080");
});
