import { Router } from "express";
import { authRoute } from "./auth";
import { dashboardRoute } from "./dashboard";

const router = Router();
router.use("/auth", authRoute);
router.use("/dashboard", dashboardRoute);
export default router;
