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
export const googleAuthError = (req: Request, res: Response) => {
  let message = req.flash("error");
  res.status(401).json({
    status: false,
    message: message[0],
  });
};
export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user as RequestUser;
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
export const googleLoginSuccess = async (req: Request, res: Response) => {
  res.redirect("/admin");
};
