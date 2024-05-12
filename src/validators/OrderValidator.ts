import { OrderSchema } from "../schema/OrderSchema";
import { Request, Response, NextFunction } from "express";
import { UnprocessedEntityError } from "../errors/unprocessed-entity";

export const OrderValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = OrderSchema.safeParse(req.body);
  if (error) {
    return next(new UnprocessedEntityError(error.message, 1006));
  }
  next();
};
