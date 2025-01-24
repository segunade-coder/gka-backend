import { Router } from "express";
import {
  loginAuthError,
  accountStatus,
  logout,
  localLoginSuccess,
} from "../../controllers/auth";
import passport from "passport";
import { rootErrorHandler } from "../../middlewares/root-error-handler";
import { checkAuth } from "../../middlewares/auth";

const router = Router();

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "login/error",
    failureFlash: true,
  }),
  localLoginSuccess
);

router.get("/login/error", rootErrorHandler(loginAuthError));
router.get("/account/status", checkAuth, rootErrorHandler(accountStatus));
router.get("/logout", checkAuth, logout);
export { router as authRoute };
