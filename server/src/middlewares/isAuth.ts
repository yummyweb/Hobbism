import { MiddlewareFn } from "type-graphql";
import { Context } from "../types/Context.type";

export const isAuth: MiddlewareFn<Context> = ({ context }, next) => {
  if (!context.req.session.userId) {
    throw new Error("User is not authenticated!");
  }

  return next();
};
