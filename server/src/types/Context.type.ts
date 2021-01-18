import { Request, Response } from "express";

export interface Context {
  req: Request & {
    session: {
      userId?: any;
    };
  };
  res: Response;
}
