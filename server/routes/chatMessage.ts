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
/**
   * @openapi
   * /api/1.0/chatroom/history/{chatroomId} :
   *  get:
   *    tags:
   *    - Chatroom
   *    description:  1.Check if user is admin 2. User will access its own chat history with admin. (user can only access url with their own chatroom id) 3. User with admin role can access different chatroom history with url parameters.
   *    summary: Get chat history for specific chatroom
   *    parameters:
   *     - name: chatroomId
   *       in: path
   *       description: The id of the chatroom.
   *       required: true
   *     - name: token
   *       in: header
   *       description: JWT Token
   *       require: true
   *    responses: 
   *      200:
   *        description: Chat Room Histories Information
   *      401:
   *        description: Client Error (No token)
   *      403:
   *        description: Client Error (Wrong token)
   *      500:
   *        description: Server Error. Error Message.
*/
router.route("/chatroom/history/:chatroomId").get(getChat);
router.route("/admin/chatroom/history").get([authenticate, authorization("admin"), adminGetChat]);
/**
   * @openapi
   * /api/1.0/admin/chatroom:
   *  get:
   *    tags:
   *    - Admin
   *    description: Get Latest update chatroom message. Get the latest message of updated chatroom. 
   *    parameters:
   *     - name: token
   *       in: header
   *       description: JWT Token
   *       require: true
   *    responses: 
   *      200:
   *        description: Chat Room Histories Information
   *      401:
   *        description: Client Error (No token)
   *      403:
   *        description: Client Error (Wrong token)
   *      500:
   *        description: Server Error. Error Message.
*/
router
  .route("/admin/chatroom")
  .get([authenticate, authorization("admin"), latestChats]);
export default router;