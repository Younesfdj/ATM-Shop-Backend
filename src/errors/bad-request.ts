import { HttpError } from "./root";
import { ErrorCodes } from "./root";

export class BadRequestError extends HttpError {
  constructor(message: string, errorCode: ErrorCodes) {
    super(message, 400, errorCode);
  }
}
