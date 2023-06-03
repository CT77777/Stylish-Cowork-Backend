import { Router } from "express";
import {
  getChat,
  testChatdata
} from "../controllers/chatMessage.js";
const router = Router();

router.route("/1.0/chatroom/history").get(getChat);
router.route("/1.0/chatroom/history2").get(testChatdata);
export default router;