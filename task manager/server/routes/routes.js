import express, { Router } from "express";
import taskRoutes from "./taskRoutes.js";
import userRoutes from "./userRoutes.js";

const router = Router();

router.use("/user", userRoutes);
router.use("/task", taskRoutes);

// ✅ Debugging: Show which routes are being registered
console.log("User Routes:", userRoutes.stack?.map(r => r.route?.path));
console.log("Task Routes:", taskRoutes.stack?.map(r => r.route?.path));

export default router;
