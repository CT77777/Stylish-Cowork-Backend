import { Router, Response, Request } from "express";
import { body } from "express-validator";
import { signUp, signIn, fbLogin, getProfile } from "../controllers/user.js";
import { PROVIDER } from "../models/userProvider.js";
import * as validator from "../middleware/validator.js";
import branch from "../middleware/branch.js";
import authenticate from "../middleware/authenticate.js";

const router = Router();

router
  .route("/user/signup")
  .post([
    body("email").isEmail().normalizeEmail(),
    body("name").exists().notEmpty().trim(),
    body("password").exists().notEmpty(),
    validator.handleResult,
    signUp,
  ]);

router.route("/user/signin").post([
  branch(
    (req) => req.body.provider === PROVIDER.NATIVE,
    [
      body("email").isEmail().normalizeEmail(),
      body("password").exists().notEmpty(),
      validator.handleResult,
      signIn,
    ]
  ),
  branch(
    (req) => req.body.provider === PROVIDER.FACEBOOK,
    [body("access_token").exists().notEmpty(), fbLogin]
  ),
  (req: Request, res: Response) => {
    res.status(400).json({ errors: "invalid provider" });
  },
]);
/**
   * @openapi
   * /api/1.0/user/profile :
   *  get:
   *    tags:
   *    - User
   *    description: Get user information
   *    parameters:
   *     - name: token
   *       in: header
   *       description: JWT Token
   *       require: true
   *    responses: 
   *      200:
   *        description: User info.
   *      401:
   *        description: Client Error (No token)
   *      403:
   *        description: Client Error (Wrong token)
   *      500:
   *        description: Server Error
*/
router.route("/user/profile").get([authenticate, getProfile]);

export default router;
