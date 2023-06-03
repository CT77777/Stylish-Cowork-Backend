import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import {getChatHistory} from "../models/chatMessage.js";
import verifyJWT from "../utils/verifyJWT.js";
import authenticate from "../middleware/authenticate.js";

export async function getChat(req: Request, res: Response) {
  try {
    // call authenticate function to find user_id
    const tokenInHeaders = req.get("Authorization");
    const token =
      tokenInHeaders?.replace("Bearer ", "") || req.cookies.jwtToken;
    const decoded = await verifyJWT(token);
    const userId : number = decoded.userId;
    console.log(userId);
    //const jwtToken: string = req.body;
    //const parsedToken : object = verifyJWT(jwtToken).then(result => {
      //return result // Success!
    //});
    //const user_id : number = 24;
    // call getChatHistory function from models query user id to get data
    const messages : object = await getChatHistory(userId);
    //console.log("controllers", messages);
    res.json(messages);
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
