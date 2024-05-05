import { Request, Response, NextFunction } from "express";
import {
  registerAdminService,
  registerUserService,
  loginUserService,
} from "../services/auth.service";
import { StatusCodes } from "http-status-codes";

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, name, phone, password } = req.body;
  const result = await registerUserService(email, name, password, phone);
  if (result instanceof Error) return next(result);

  res.status(StatusCodes.ACCEPTED).json(result);
};
const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const result = await loginUserService(email, password);

  if (result instanceof Error) return next(result);

  res.status(StatusCodes.ACCEPTED).json(result);
};
const registerAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, name, phone, password } = req.body;
  const result = await registerAdminService(email, name, password, phone);
  if (result instanceof Error) return next(result);

  res.status(StatusCodes.ACCEPTED).json(result);
};

export { registerUser, loginUser, registerAdmin };
