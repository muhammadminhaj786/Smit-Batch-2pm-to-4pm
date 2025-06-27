import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";
import productRoutes from "./src/routes/product.routes.js";

const app = express();
const PORT = 8080;

dotenv.config();
connectDb();
app.use(express.json());
app.use(cors());

app.use("/api", authRoutes);
app.use("/product", productRoutes)

app.listen(PORT, () => {
  console.log("server is running");
});
