import { Router } from "express";
import {
  getChat,
  testChatdata,
  latestChats,
  adminGetChat
} from "../controllers/chatMessage.js";
import authenticate from "../middleware/authenticate.js";
import authorization from "../middleware/authorization.js";
const router = Router();

router.route("/chatroom/history").get(getChat);
router.route("/admin/chatroom/history").get([authenticate, authorization("admin"), adminGetChat]);
router
  .route("/admin/chatroom")
  .get([authenticate, authorization("admin"), latestChats]);
export default router;