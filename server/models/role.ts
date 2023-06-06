import z from "zod";
import pool from "./databasePool.js";
import { FieldPacket, RowDataPacket } from "mysql2";

/*
roles
  id bigint unsigned NOT NULL AUTO_INCREMENT
  name varchar(127) NOT NULL
**/

/*
user_role
  user_id bigint unsigned NOT NULL
  role_id varchar(127) NOT NULL
**/

export async function isUserHasRole(userId: number, roleName: string) {
  try {
    const [rows] = await pool.query(
      `
      SELECT COUNT(role_id) as count FROM user_role
      LEFT JOIN roles
      ON user_role.role_id = roles.id AND roles.name = ?
      WHERE user_id = ? AND roles.name = ?
    `,
      [roleName, userId, roleName]
    );
    if (!Array.isArray(rows)) {
      throw new Error("invalid rows");
    }
    const result = z
      .object({
        count: z.number(),
      })
      .parse(rows[0]);
    return result.count > 0;
  } catch (err) {
    console.error(err);
    return false;
  }
}
interface role {
  role_id: number;
}
export async function isUserAdmin(userId: number) {
  try {
    const userRole : [RowDataPacket[], FieldPacket[]] = await pool.query(
      `SELECT role_id FROM user_role WHERE user_id = ?;`,
      [userId]
    );
    if (!userRole[0][0]) {
      return false;
    }
    const userRoleId : number = userRole[0][0].user_id
    if (userRoleId === 3 ) { //admin id is set to 3
      return true;
    } 
  } catch (err) {
    console.error(err);
    return false;
  }
}
