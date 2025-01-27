import { NextFunction, Request, Response } from "express";
import { ErrorCode } from "../exceptions/root";
import { RequestUser } from "../types/index";

export const accountStatus = (req: Request, res: Response) => {
  res.json(req.user);
};

export const loginAuthError = (req: Request, res: Response) => {
  let message = req.flash("error");
  res.status(message[1] ? +message[1] : 401).json({
    status: false,
    message: message[0] ? message[0] : "Something went wrong",
    errorCode: message[2] ? +message[2] : ErrorCode.BAD_REQUEST,
  });
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.status(200).json({ status: true });
  });
};
export const localLoginSuccess = async (req: Request, res: Response) => {
  res
    .status(200)
    .json({ status: true, message: "Login Successful", data: req.user });
};
