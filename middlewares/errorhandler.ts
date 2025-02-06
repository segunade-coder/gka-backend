import { NextFunction, Request, Response } from "express";
import logger from "../utils/logger";
import { HttpException } from "../exceptions/root";

export const errorHandler = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = typeof err.statusCode === "number" ? err.statusCode : 500;
  logger.error(err.message, { stack: err.stack });
  res.status(status).json({
    status: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Something went wrong"
        : err.message,
    errorCode: err.errorCode,
    errors: process.env.NODE_ENV === "production" ? null : err.errors,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
