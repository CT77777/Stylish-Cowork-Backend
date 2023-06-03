import { ResultSetHeader } from "mysql2";
import { z } from "zod";
import pool from "./databasePool.js";

/*
   id INT AUTO_INCREMENT PRIMARY KEY,
    chat_room_id BIGINT UNSIGNED NOT NULL,
    sender_id BIGINT NOT NULL,
    message VARCHAR(500),
    time_stamp TIMESTAMP,
    FOREIGN KEY (chat_room_id) REFERENCES users (id)
*/

export const chatHistorySchema = z.object({
  message: z.string(),
  sender_id: z.number(),
  time_stamp: z.date(),
});

/*export const chatRelatedSchema = z.object({
  message: z.string(),
  sender_id: z.number(),
  time_stamp: z.date(),
  user_name: z.string(),
  user_picture: z.string()
});*/

export async function getChatHistory(user_id: number) {
  const results = await pool.query(
    `SELECT message, sender_id, time_stamp
    FROM chat_messages
    WHERE chat_room_id = ?;`,
    [user_id]
  );
  const chatHistory = z.array(chatHistorySchema).parse(results[0]);
  console.log("chat", chatHistory);
  return chatHistory;
}

//getChatHistory(24);

/*export async function getLatestChatRoom() {
  const results = await pool.query(
    `SELECT cm.message, cm.sender_id, cm.chat_room_id, u.name, u.picture FROM chat_messages 
    AS cm JOIN users AS u ON cm.chat_room_id = u.id 
    ORDER BY cm.time_stamp DESC LIMIT 10;`
  );
  //console.log("results", results);
  const latestChats = z.array(chatRelatedSchema).parse(results[0]);
  console.log("Latest Chats", latestChats);
  return latestChats;
}
getLatestChatRoom();*/