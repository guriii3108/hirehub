import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const isAuthenticated = async(req, res, next)=>{
  try {
    const token = req.cookies.token;
    if(!token){
      return res.status(401).json({
        message: "Unauthorized",
        success: false,
      });
    }
    const decoded = await jwt.verify(token,process.env.JWT_SECRET);
    if(!decoded){
      return res.status(401).json({
        message: "Invalid Token",
        success: false,
      });
    }

    req.id = decoded.id; // we stored id in token while creating it
    next();
    
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}