import express from "express";

import mongoose from "mongoose";
import Product from "./src/model/product.js";
import cors from "cors";
import connectDB from "./src/config/db.js";
import dotenv from "dotenv";
import prductRoutes from "./src/routes/product.routes.js";

const app = express();
const PORT = 8080;

dotenv.config();

//middleware
app.use(express.json());
app.use(cors());

//mongo db connect
// const DB_URI = "mongodb+srv://eb20103087minhajwahid:minhaj@cluster0.dfn61hb.mongodb.net/"
// mongoose.connect(DB_URI)
// mongoose.connection.on('connected', ()=> console.log('mongodb is connected'))
// mongoose.connection.on('error', ()=> console.log('mongodb is not connected'))
connectDB();

//create product

//get products
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while getting products",
      error: error.message,
    });
  }
});

app.use('/api',prductRoutes)

app.listen(PORT, () => {
  console.log("server is running");
});
