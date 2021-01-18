import { redis } from "../redis";
import { v4 } from "uuid";
import { confirmationPrefix } from "../constants/redisPrefixes";

export const createConfirmationURL = async (userId: number) => {
  const token = v4();
  // Store the userId in redis
  redis.set(confirmationPrefix + token, userId, "ex", 60 * 60 * 24); // 1 day expiration
  return `https://localhost:3000/user/confirm/${token}`;
};
