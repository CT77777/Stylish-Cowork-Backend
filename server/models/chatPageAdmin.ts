import { ResultSetHeader } from "mysql2";
import { z } from "zod";
import pool from "./databasePool.js";

export const LatestchatSchema = z.object({
  message: z.string(),
  time_stamp: z.number(),
  sender_id: z.number(),
  chat_room_id: z.number(),
  picture: z.string(),
  name: z.string()
});

export async function getLatestChat(limit: number = 1, offset: number) {
  const updatedChatRoom = await pool.query(
    `SELECT cm.message, cm.time_stamp, cm.sender_id, cm.chat_room_id, u.picture, u.name 
    FROM chat_messages cm JOIN users u ON cm.chat_room_id = u.id 
    ORDER BY cm.id DESC LIMIT ? OFFSET ?;`,
    [limit, offset]
  );
  //console.log("chatrooms", updatedChatRoom[0]);
  const updatedChatRoomData = z.array(LatestchatSchema).parse(updatedChatRoom[0]);
  return updatedChatRoomData;
}
//getLatestChat(1, 0);

/*export async function getChatroomUserdata(userId: number) {
  const updatedChatRoomUser = await pool.query(
    `SELECT name, picture
    FROM users
    WHERE id ?;`,
    [userId]
  );
  const updatedChatRoomUserData = z.array(chatUserSchema).parse(updatedChatRoomUser[0]);
  return updatedChatRoomUserData;
}*/

