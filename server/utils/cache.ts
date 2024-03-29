import { Redis } from "ioredis";

const portNumber: number = parseInt(process.env.REDIS_PORT || "0");

export const cache = new Redis({
  port: portNumber, // Redis port
  // host: process.env.REDIS_HOST,
  host: undefined,
  // username: process.env.REDIS_USER,
  // password: process.env.REDIS_PASSWORD,
  commandTimeout: 300,
});

export async function get(key: string) {
  try {
    const result = await cache.get(key);
    return result;
  } catch (err) {
    return null;
  }
}

export async function set(key: string, value: string) {
  try {
    const result = await cache.set(key, value);
    return result;
  } catch (err) {
    return null;
  }
}

export async function del(key: string) {
  try {
    const result = await cache.del(key);
    return result;
  } catch (err) {
    return null;
  }
}

export const getCampaignKey = () => {
  return "campaigns";
};
