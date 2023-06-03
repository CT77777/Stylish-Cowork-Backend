import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = http.createServer(app);
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
  console.log("New user connected");

  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", `got your message {${msg}}!`);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(8080, () => {
  console.log("Socket server is listening on port:8080");
});
