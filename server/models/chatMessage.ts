import { ResultSetHeader } from "mysql2";
import { z } from "zod";
import pool from "./databasePool.js";


/*
   id INT AUTO_INCREMENT PRIMARY KEY,
    chat_room_id BIGINT UNSIGNED NOT NULL,
    sender_id BIGINT NOT NULL,
    message VARCHAR(500),
    time_stamp BIGINT,
    FOREIGN KEY (chat_room_id) REFERENCES users (id)
*/

export const chatHistorySchema = z.object({
  message: z.string(),
  sender_id: z.number(),
  time_stamp: z.number(),
  name: z.string(),
  picture: z.string()
});

export async function getChatHistory(chatroomId: number) {
  const results = await pool.query(
    `SELECT cm.message, cm.sender_id, cm.time_stamp, u.name, u.picture
    FROM chat_messages cm JOIN users u ON cm.sender_id = u.id
    WHERE chat_room_id = ?;`,
    [chatroomId]
  );
  const chatHistory = z.array(chatHistorySchema).parse(results[0]);
  //console.log("chat", chatHistory);
  return chatHistory;
}
