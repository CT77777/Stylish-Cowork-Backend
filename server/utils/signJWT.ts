import jwt from "jsonwebtoken";

const JWT_KEY = process.env.JWT_KEY || "";
export const EXPIRE_TIME = 60 * 60 * 24 * 3;

export default function signJWT(userId: number) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { userId },
      JWT_KEY,
      { expiresIn: EXPIRE_TIME },
      function (err, token) {
        if (err) {
          reject(err);
        }
        resolve(token);
      }
    );
  });
}
