import { Router } from "express";
import authenticate from "../middleware/authenticate.js";
import authorization from "../middleware/authorization.js";
import {
  getChatHistories,
  getAdminChatRooms,
} from "../controllers/chatBoxTest.js";

const router = Router();

router.route("/chatroom/history/test").get([authenticate, getChatHistories]);

router
  .route("/admin/chat_rooms")
  .get([authenticate, authorization("admin"), getAdminChatRooms]);

export default router;
