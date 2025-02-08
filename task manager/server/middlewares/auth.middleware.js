import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

const protectRoute = async(req, res, next) => {
    try {
      let token = req.cookies.token;

      if (token){
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const resp = await User.findById(decodedToken.userId).select("isAdmin email");

        req.user = {
            email: resp.email,
            isAdmin: resp.isAdmin,
            userId: decodedToken.userId
        }
        next();
      }
    } catch (error) {
        console.log(error);
        return res.status(401).json({status: false, 
            message: "Not authorized to access this route"});
    }


}


const isAdminRoute = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      return res.status(401).json({
        status: false,
        message: "Not authorized as admin. Try login as admin.",
      });
    }
  };
  
  export { isAdminRoute, protectRoute };