import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

const protectRoute = async (req, res, next) => {
  try {
    let token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        status: false,
        message: "Not authorized to access this route - No token provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select("isAdmin email");

    if (!user) {
      return res.status(401).json({
        status: false,
        message: "User not found",
      });
    }

    req.user = {
      email: user.email,
      isAdmin: user.isAdmin,
      userId: decoded.userId,
    };

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      status: false,
      message: "Invalid or expired token",
    });
  }
};

const isAdminRoute = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(403).json({
      status: false,
      message: "Not authorized as admin. Try logging in as an admin.",
    });
  }
};

export { protectRoute, isAdminRoute };
