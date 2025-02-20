import express from "express";
import { registerUser, loginUser, logoutUser, getNotificationsList, getTeamList, updateUserProfile, markNotificationRead, changeUserPassword } from "../controllers/user.controller.js";
import { protectRoute, isAdminRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

router.get("/get-team", protectRoute, isAdminRoute, getTeamList);
router.get("/notifications", protectRoute, getNotificationsList);
router.put("/profile", protectRoute, updateUserProfile);
router.put("/read-noti", protectRoute, markNotificationRead);
router.put("/change-password", protectRoute, changeUserPassword);

// ✅ Debugging: Show all user routes
console.log("User Routes Loaded:", router.stack.map((r) => r.route?.path));

export default router;
