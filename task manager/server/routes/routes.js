import express from "express";
const router = express.Router();

// Example API endpoint
router.get("/", (req, res) => {
    res.send("API is working!");
});

export default router; // ✅ Ensure it's exported properly
