import { PassportStatic } from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { prisma } from "../prisma";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { compareSync } from "bcrypt";
import { ErrorCode } from "../exceptions/root";
import { validateLoginData } from "../types";
interface User extends Express.User {
  id?: string;
  // Other user properties
}
export const initializePassport = (passport: PassportStatic) => {
  passport.serializeUser((user: User, done) => {
    done(null, user?.id);
  });
  passport.deserializeUser(async (id: string, done) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          email: true,
          profile: true,
          fullName: true,
        },
      });
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
  passport.use(
    new LocalStrategy(
      { usernameField: "email", passReqToCallback: true },
      async (req, email, password, done) => {
        if (!req.isAuthenticated()) {
          try {
            const parsed = validateLoginData.safeParse({ email, password });
            if (!parsed.success) {
              return done(null, false, {
                message: req.flash("error", [
                  parsed.error.errors[0].message,
                  "422",
                  parsed.error.errors[0].message.includes("email")
                    ? "" + ErrorCode.INVALID_EMAIL
                    : "" + ErrorCode.UNPROCESSABLE_ENTITY,
                ]),
              });
            }
            const user = await prisma.user.findFirst({
              where: {
                AND: [{ email }, { password }],
              },
              select: {
                id: true,
                email: true,
                profile: true,
              },
            });
            if (!user) {
              return done(null, false, {
                message: req.flash("error", [
                  "Invalid Credentials",
                  "404",
                  "" + ErrorCode.USER_NOT_FOUND,
                ]),
              });
            }

            return done(null, user);
          } catch (error) {
            done(error);
          }
        } else {
          done(null, req.user);
        }
      }
    )
  );
};
