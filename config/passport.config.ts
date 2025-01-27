import { PassportStatic } from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { ErrorCode } from "../exceptions/root";
import { validateLoginData } from "../types";
import db from "../utils/mysqlApi";
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
      const query = `
      SELECT id, email, profile, fullName
      FROM user
      WHERE id = ?
      LIMIT 1
  `;
      const user = await db.queryString(query, [id]);
      done(null, user[0]);
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
            const query = `
            SELECT id, email, profile
            FROM user
            WHERE email = ? AND password = ?
            LIMIT 1
        `;
            const result = await db.queryString(query, [email, password]);
            const user = result[0];
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
