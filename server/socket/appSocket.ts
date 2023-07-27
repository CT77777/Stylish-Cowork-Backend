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
const userSocketRoomsMap: Record<string, string> = {};

io.on("connection", (socket) => {
  console.log(`New connection connected... socket id is {${socket.id}}`);

  socket.on("admin connect", (sender_id) => {
    try {
      adminSocket[sender_id] = socket;
      console.log(`Admin socket id {${socket.id}} connected...`);
      io.emit("admin status", `Admin No.${sender_id} online now!`); // broadcast admin online status to every user

      if (Object.keys(userSocketRoomsMap).length !== 0) {
        for (let key in userSocketRoomsMap) {
          socket.join(userSocketRoomsMap[key]);
          console.log(
            `Admin socket id {${socket.id}} joined the room {${userSocketRoomsMap[key]}}`
          );
        }
      }
    } catch (error: any) {
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  });

  socket.on("join room", (room) => {
    try {
      socket.join(room.toString());
      rooms.push(room.toString());
      userSocketRoomsMap[socket.id] = room.toString();
      console.log(
        `socket id {${socket.id}} joined the room {${room.toString()}}`
      );

      if (Object.keys(adminSocket).length !== 0) {
        for (let key in adminSocket) {
          adminSocket[key].join(room.toString());
          console.log(
            `Admin socket id {${
              adminSocket[key].id
            }} joined the room {${room.toString()}}`
          );
        }
      }
    } catch (error: any) {
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  });

  socket.on("chat message", async (messageInfo, chat_room_id) => {
    const message = messageInfo.message;
    const sender_id = messageInfo.sender_id;
    const time_stamp = messageInfo.time_stamp;
    const chatRoomId = chat_room_id.toString();

    try {
      const messageInfoDetails = await storeMessage(
        message,
        sender_id,
        time_stamp,
        chat_room_id
      );
      console.log("Message: ", messageInfoDetails);

      socket.to(chatRoomId).emit("chat message", messageInfo); // send a message to specified room, room name must be the same type
    } catch (error: any) {
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  });

  socket.on("disconnect", () => {
    try {
      for (let key in adminSocket) {
        if (adminSocket[key] === socket) {
          io.emit(
            "admin status",
            `Admin No.${key} offline. Please leave your messages!`
          );
          // broadcast admin offline status to every user
        }
      }

      if (userSocketRoomsMap[socket.id] !== undefined) {
        delete userSocketRoomsMap[socket.id];
      }

      console.log(`one connection disconnected... socket id is ${socket.id}`);
    } catch (error: any) {
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  });
});

server.listen(8080, () => {
  console.log("Socket server is listening on port:8080");
});
