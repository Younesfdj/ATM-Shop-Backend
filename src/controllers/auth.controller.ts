import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../errors/bad-request";
import {
  registerAdminService,
  registerUserService,
  loginUserService,
} from "../services/auth.service";
import { generateHashedPassword } from "../utils/password";
import { StatusCodes } from "http-status-codes";
const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, name, phone, password } = req.body;
  const result = await registerUserService(
    email,
    name,
    generateHashedPassword(password),
    phone
  );
  if (result instanceof BadRequestError) {
    return next(result);
  }
  if (result instanceof Error) {
    return next(result);
  }
  res.status(StatusCodes.ACCEPTED).json(result);
};
const loginUser = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  loginUserService(email, password);
};
const registerAdmin = (req: Request, res: Response, next: NextFunction) => {
  const { email, name, phone, password } = req.body;
  registerAdminService(email, phone, password, name);
};

export { registerUser, loginUser, registerAdmin };
