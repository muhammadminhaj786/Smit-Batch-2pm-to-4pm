import express from "express";
import { createUser, loginUser, getUser, verifyOtp } from "../controller/auth.controller.js";
import { authMiddleware } from "../middlewares/authmiddleware.js";

const authRoutes = express.Router();

authRoutes.post("/register", createUser);
authRoutes.post("/login", loginUser);
authRoutes.get("/user/:id", authMiddleware, getUser);
authRoutes.post("/verify", verifyOtp);



export default authRoutes;
