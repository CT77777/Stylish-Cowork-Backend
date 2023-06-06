import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import {getChatHistory} from "../models/chatMessage.js";
import {getLatestChat} from "../models/chatPageAdmin.js";
import verifyJWT from "../utils/verifyJWT.js";
import authenticate from "../middleware/authenticate.js";
import {isUserAdmin} from "../models/role.js";

export async function getChat(req: Request, res: Response) {
  try {
    // call authenticate function to find user_id
    const tokenInHeaders = req.get("Authorization");
    const token =
      tokenInHeaders?.replace("Bearer ", "") || req.cookies.jwtToken;
    const decoded = await verifyJWT(token);
    const userId : number = decoded.userId;
    let chatroomId : number = userId;
    const isAdmin = await isUserAdmin(userId);
    if (!isAdmin) {
      if (parseInt(req.params.chatroomId) !== userId) {
        res.status(403).json({Error: "Access Denied"});
        return;
      } 
    } else {
      chatroomId = parseInt(req.params.chatroomId);
    }
    const data : object = await getChatHistory(chatroomId);
    //console.log("controllers", messages);
    res.json({data});
    // return data
  } catch (err) {
    console.error(err);
    if (err instanceof Error) {
      res.status(500).json({ errors: err.message });
      return;
    } 
    return res.status(500).json({ errors: "get chat failed" });
  }
}

export async function adminGetChat(req: Request, res: Response) {
  try {
    // call authenticate function to find user_id
    const userId : number = req.body.userId;
    //console.log(userId);
    const messages : object = await getChatHistory(userId);
    //console.log("controllers", messages);
    res.json({messages});
    // return data
  } catch (err) {
    console.error(err);
    if (err instanceof Error) {
      res.status(500).json({ errors: err.message });
      return;
    }
    return res.status(500).json({ errors: "get chat failed" });
  }
}


export async function testChatdata (req: Request, res: Response) {
  try {
    const mockData =   {
      message: 'Hello, how are you?',
      sender_id: 0,
      time_stamp: "2023-06-02:07:48.000",
    }
    res.json(mockData);
  } catch (err){
    console.error(err);
    if (err instanceof Error) {
      res.status(500).json({ errors: err.message });
      return;
    }
    return res.status(500).json({ errors: "get chat failed" });
  }
}

interface Room {
  message: string;
  time_stamp: number;
  sender_id: number;
  chat_room_id: number;
  picture: string ;
  name: string
}

export async function latestChats(req: Request, res: Response) {
  try {
    const latestChatsroomIds : Array<number> = [];
    const latestChatsroomMessage = [];
    let offset: number = 1;
    for (offset = 0; latestChatsroomIds.length < 10; offset++) {
      const [chatrooms] : Room[] = await getLatestChat(1, offset);
      if (!chatrooms) {
        break;
      }
      if (!latestChatsroomIds.includes(chatrooms.chat_room_id)) {
        latestChatsroomIds.push(chatrooms.chat_room_id);
        latestChatsroomMessage.push(chatrooms);
      } else {
        console.log("chat Room ID重複", chatrooms.chat_room_id);
      }
    }
    console.log("最新聊天室列表", latestChatsroomIds);
    const data = latestChatsroomMessage;
    res.json({data});
  } catch (err) {
    console.error(err);
    if (err instanceof Error) {
      res.status(500).json({ errors: err.message });
      return;
    }
    return res.status(500).json({ errors: "get chat failed" });
  }
}