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
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID as string,
        clientSecret: process.env.CLIENT_SECRET as string,
        callbackURL:
          process.env.NODE_ENV === "production"
            ? `https://rayvvin.onrender.com/api/auth/google/callback`
            : `http://localhost:3000/api/auth/google/callback`,
        passReqToCallback: true,
      },
      async (req, accessToken, refreshToken, profile, done) => {
        if (!req.isAuthenticated()) {
          const user = await prisma.user.findFirst({
            where: {
              OR: [
                {
                  googleId: profile.id,
                },
                {
                  email: profile._json.email,
                },
              ],
            },
            select: {
              id: true,
              email: true,
              googleId: true,
              profile: true,
              fullName: true,
            },
          });
          if (!user) {
            if (profile._json.email) {
              try {
                const createUser = await prisma.user.create({
                  data: {
                    email: profile._json.email!,
                    googleId: profile.id,
                    profile: profile._json.picture,
                    fullName: profile.displayName,
                  },
                  select: {
                    id: true,
                    email: true,
                    profile: true,
                    fullName: true,
                  },
                });
                return done(null, createUser);
              } catch (error: any) {
                return done(error);
              }
            } else {
              return done(null, false, { message: "No email present" });
            }
          }

          if (!user.googleId) {
            await prisma.user.update({
              where: {
                email: user.email,
              },
              data: {
                googleId: profile.id,
              },
            });
          }
          return done(null, {
            id: user.id,
            email: user.email,
            profile: user.profile,
            fullName: user.fullName,
          });
        } else {
          return done(null, req.user);
        }
      }
    )
  );
};
