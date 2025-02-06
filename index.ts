import dotenv from "dotenv";
dotenv.config();
import express from "express";
import "express-async-errors";
import compression from "compression";
import cors from "cors";
import { corsConfig, sessionMiddleware } from "./config/configOptions";
import router from "./routes";
import { errorHandler } from "./middlewares/errorhandler";
const app = express();
const PORT = process.env.PORT || 3000;
import logger, { morganLogger } from "./utils/logger";
import passport from "passport";
import { initializePassport } from "./config/passport.config";
import flash from "express-flash";
import path from "path";
import helmet from "helmet";
// express middleware
app.set("trust proxy", 1);
app.use(cors(corsConfig));
app.use(express.json());
process.env.NODE_ENV === "production" &&
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"], // modify as needed
        imgSrc: ["'self'", "data:", "blob:"],
        frameSrc: ["'self'", "https://www.youtube.com/"], // added frame-src directive
      },
    })
  );
app.use(compression());
app.use(flash());
app.use(sessionMiddleware);
app.use(morganLogger);
initializePassport(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.static(path.resolve(__dirname, "./dist")));
app.use("/api", router);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./dist", "index.html"));
});
app.use(errorHandler);
app.listen(PORT, () => logger.info(`App Live`));
