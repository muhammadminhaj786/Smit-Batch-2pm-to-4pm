import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";
import productRoutes from "./src/routes/product.routes.js";

const app = express();
const PORT = 8080;


//env 
dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());

//connect mongo db
connectDb();

//route
app.use("/api", authRoutes);
app.use("/product", productRoutes)

app.listen(PORT, () => {
  console.log("server is running");
});
