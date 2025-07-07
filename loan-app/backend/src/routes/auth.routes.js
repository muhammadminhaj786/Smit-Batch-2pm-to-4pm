import express from "express";
import { createUser, loginUser, getUser } from "../controller/auth.controller.js";

const authRoutes = express.Router();

authRoutes.post("/register", createUser);
authRoutes.post("/login", loginUser);
authRoutes.get("/user/:id", getUser);


export default authRoutes;
