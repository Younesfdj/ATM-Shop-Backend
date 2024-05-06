import { CategorySchema } from "../schema/CategorySchema";
import { Request, Response, NextFunction } from "express";
import { UnprocessedEntityError } from "../errors/unprocessed-entity";

export const CategoryValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = CategorySchema.safeParse(req.body);
  if (error) {
    return next(new UnprocessedEntityError(error.message, 1006));
  }
  next();
};
