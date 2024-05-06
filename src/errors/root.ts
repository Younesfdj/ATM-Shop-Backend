export class HttpError extends Error {
  statusCode: number;
  errorCode: ErrorCodes;
  error: any;
  constructor(
    errMessage: string,
    statusCode: number,
    errorCode: ErrorCodes,
    error?: any
  ) {
    super(errMessage);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.error = error;
  }
}

export enum ErrorCodes {
  USER_NOT_FOUND = 1001,
  USER_ALREADY_EXISTS = 1002,
  INVALID_PASSWORD = 1003,
  INVALID_TOKEN = 1004,
  UNAUTHORIZED = 1005,
  UNPROCESSED_ENTITY = 1006,
  INERNAL_SERVER_ERROR = 1007,
  PRODUCT_NOT_FOUND = 2001,
  INVALID_PRODUCT = 2003,
}
