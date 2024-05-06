import { ProductSchema } from "../schema/ProductSchema";
import { Request, Response, NextFunction } from "express";
import { UnprocessedEntityError } from "../errors/unprocessed-entity";

export const ProductValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = ProductSchema.safeParse(req.body);
  if (error) {
    return next(new UnprocessedEntityError(error.message, 1006));
  }
  next();
};
