import express from "express";
import { createProduct } from "../controller/product.controller.js";

const prductRoutes = express.Router();

prductRoutes.post("/product", createProduct);

export default prductRoutes;
