import { Request, Response, NextFunction } from "express";
import { UserSchema, LogInUserSchema } from "../schema/UserSchema";
import { UnprocessedEntityError } from "../errors/unprocessed-entity";
export const RegisterUserValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = UserSchema.safeParse(req.body);
  if (error) {
    return next(new UnprocessedEntityError(error.message, 1006));
  }
  next();
};

export const LogInUserValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = LogInUserSchema.safeParse(req.body);
  if (error) {
    return next(new UnprocessedEntityError(error.message, 1006));
  }
  next();
};
