import mysql, { OkPacket, RowDataPacket, FieldPacket } from "mysql2/promise";
import * as dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

export async function storeMessage(
  message: string,
  sender_id: number,
  time_stamp: number,
  chat_room_id: number
) {
  const response: [OkPacket, FieldPacket[]] = await pool.query(
    `
        INSERT INTO chat_messages(
            chat_room_id,
            sender_id,
            message,
            time_stamp
        )
        VALUES
        (?, ?, ?, ?);
    `,
    [chat_room_id, sender_id, message, time_stamp]
  );
  const id = response[0].insertId;
  const messageInfo = await getMessage(id);
  return messageInfo;
}

async function getMessage(id: number) {
  const response: [RowDataPacket[], FieldPacket[]] = await pool.query(
    `
        SELECT * FROM chat_messages
        WHERE id = ?
    `,
    [id]
  );

  const result = response[0][0];
  return result;
}
