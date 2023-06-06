import express from "express";
import https from "https";
import fs from "fs";
import { Server, Socket } from "socket.io";
import cors from "cors";
import { storeMessage } from "./dbPoolSocket.js";

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
  allowEIO3: true,
});

app.use(cors());

const adminSocket: Record<number, Socket> = {};
const rooms: string[] = [];

io.on("connection", (socket) => {
  console.log(`New connection connected, socket id is ${socket.id}`);

  socket.on("admin connect", (sender_id) => {
    adminSocket[sender_id] = socket;
    io.emit("admin status", `Admin No.${sender_id} online now!`);
    if (rooms.length !== 0) {
      rooms.forEach((room) => {
        socket.join(room.toString());
      });
    }
  });

  socket.on("join room", (room) => {
    socket.join(room.toString());
    rooms.push(room.toString());

    if (Object.keys(adminSocket).length !== 0) {
      for (let key in adminSocket) {
        adminSocket[key].join(room.toString());
      }
    }
  });

  socket.on("chat message", async (messageInfo, chat_room_id) => {
    // console.log("messageInfo: ", messageInfo);

    // io.emit("chat message", `got your message {${msg}}!`); // This will emit the event to all connected sockets
    // socket.broadcast.emit("chat message", msg); // send a message to every connected client except for the one triggering the event

    const message = messageInfo.message;
    const sender_id = messageInfo.sender_id;
    const time_stamp = messageInfo.time_stamp;
    const chatRoomId = chat_room_id.toString();

    await storeMessage(message, sender_id, time_stamp, chat_room_id);
    socket.to(chatRoomId).emit("chat message", messageInfo); // send a message to specified room, room name must be the same type
  });

  socket.on("disconnect", () => {
    for (let key in adminSocket) {
      if (adminSocket[key] === socket) {
        io.emit(
          "admin status",
          `Admin No.${key} offline. Please leave your messages!`
        );
      }
    }
    console.log("one connection disconnected");
    // socket.broadcast.emit("chat message", "Someone is offline......");
  });
});

server.listen(8080, () => {
  console.log("Socket server is listening on port:8080");
});
