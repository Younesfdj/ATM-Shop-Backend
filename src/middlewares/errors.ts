import { HttpError } from "errors/root";
import { Request, Response, NextFunction } from "express";
const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof HttpError) {
    return res
      .status(err.statusCode)
      .json({ message: err.message, errorCode: err.errorCode });
  }
  return res.status(500).json({ message: "Internal server error" });
};

export default errorHandler;
