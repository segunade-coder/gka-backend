import { Router } from "express";
import {
  loginAuthError,
  googleAuthError,
  accountStatus,
  logout,
  localLoginSuccess,
  googleLoginSuccess,
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
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "google/error",
    failureFlash: true,
  }),
  googleLoginSuccess
);
router.get("/login/error", rootErrorHandler(loginAuthError));
router.get("/google/error", rootErrorHandler(googleAuthError));
router.get("/account/status", checkAuth, rootErrorHandler(accountStatus));
router.get("/logout", checkAuth, logout);
export { router as authRoute };
