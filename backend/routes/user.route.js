import express from "express";
import {
    register,
    login,
    logout,
    updateProfile,
} from "../controllers/user.controller.js";
import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { singleUpload, updateUpload } from "../middlewares/multer.js";

const route = Router();

route.post("/register", singleUpload, register);
route.post("/login", login);
route.post("/logout", isAuthenticated, logout);
route.put("/update", isAuthenticated, updateUpload, updateProfile);

export default route;
