import { Response, Request } from "express";

interface Message {
  message: string;
  sender_id: number;
  time_stamp: string;
  chat_room_id: number;
}

interface Room {
  message: string;
  sender_id: number;
  time_stamp: string;
  chat_room_id: number;
  user_name: string;
  user_picture: string;
}

export function getChatHistories(req: Request, res: Response) {
  const chatHistories: Message[] = [
    {
      message: "Hello!",
      sender_id: 13,
      time_stamp: "2023-05-31 22:09:59",
      chat_room_id: 13,
    },
    {
      message: "Hi!",
      sender_id: 0,
      time_stamp: "2023-05-31 22:10:30",
      chat_room_id: 13,
    },
    {
      message: "What can I help you?",
      sender_id: 0,
      time_stamp: "2023-05-31 22:10:31",
      chat_room_id: 13,
    },
  ];
  const result = { data: chatHistories };
  res.status(200).json(result);
}

export function getAdminChatRooms(req: Request, res: Response) {
  const Rooms: Room[] = [
    {
      message: "Hello!",
      sender_id: 13,
      time_stamp: "2023-05-31 22:09:59",
      chat_room_id: 13,
      user_name: "Janet",
      user_picture: "https://cdn-icons-png.flaticon.com/128/616/616430.png",
    },
    {
      message: "Check opening time",
      sender_id: 11,
      time_stamp: "2023-06-02 23:09:59",
      chat_room_id: 11,
      user_name: "Vicky",
      user_picture: "https://cdn-icons-png.flaticon.com/128/2171/2171991.png",
    },
  ];

  const result = { data: Rooms };
  res.status(200).json(result);
}
