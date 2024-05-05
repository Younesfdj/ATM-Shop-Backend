export class HttpError extends Error {
  statusCode: number;
  errorCode: ErrorCodes;
  constructor(errMessage: string, statusCode: number, errorCode: ErrorCodes) {
    super(errMessage);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
}

export enum ErrorCodes {
  USER_NOT_FOUND = 1001,
  USER_ALREADY_EXISTS = 1002,
  INVALID_PASSWORD = 1003,
  INVALID_TOKEN = 1004,
  UNAUTHORIZED = 1005,
  PRODUCT_NOT_FOUND = 2001,
}
