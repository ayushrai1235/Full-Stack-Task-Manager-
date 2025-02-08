import express, { Router } from "express";
import taskRoutes from "./taskRoutes.js";
import userRoutes from "./userRoutes.js";
const router = Router();

router.use("/user", userRoutes);
router.use("/task", taskRoutes);

export default router;

