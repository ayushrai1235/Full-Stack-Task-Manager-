import User from "../models/user.models.js";
import { createJWT } from "../utils/createJWT.js";

export const registerUser = async (req, res) => {
    try {
      const { name, email, password, isAdmin, role, title } = req.body;
      if (!password){
        console.log("password required")
      }
      const userExist = await User.findOne({ email });
  
      if (userExist) {
        return res.status(400).json({
          status: false,
          message: "User already exists",
        });
      }
  
      const user = await User.create({
        name,
        email,
        password,
        isAdmin,
        role,
        title,
      });
     console.log(name, email, password, isAdmin, role, title);
      if (user) {
        isAdmin ? createJWT(res, user._id) : null;
  
        user.password = undefined;
  
        res.status(201).json(user);
      } else {
        return res
          .status(400)
          .json({ status: false, message: "Invalid user data" });
      }
    } catch (error) {
      console.log("error", error);
      return res.status(400).json({ status: false, message: error.message });
    }
  };