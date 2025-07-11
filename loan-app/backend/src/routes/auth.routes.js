import express from "express";
import {
  createUser,
  loginUser,
  getUser,
  verifyOtp,
  getAllUser,
} from "../controller/auth.controller.js";
import { adminVerify } from "../middlewares/adminmiddleware.js";
// import { authMiddleware } from "../middlewares/authmiddleware.js";

const authRoutes = express.Router();

authRoutes.post("/register", createUser);
authRoutes.post("/login", loginUser);
authRoutes.get("/user/:id", getUser);
authRoutes.get("/", adminVerify, getAllUser);
authRoutes.post("/verify", verifyOtp);

export default authRoutes;
