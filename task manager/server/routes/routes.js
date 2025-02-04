import { Router } from "express";
const router = Router();

// Example API endpoint
router.get("/", (req, res) => {
    res.post("API is working!");
});

export default router; // ✅ Ensure it's exported properly
