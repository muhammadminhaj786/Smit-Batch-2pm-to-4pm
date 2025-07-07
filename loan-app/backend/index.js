import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routes.js";
import productRoutes from "./src/routes/product.routes.js";
import multer from "multer";
import { storage } from "./src/config/cloudinary.js";
import loanTypeRoutes from "./src/routes/loan.routes.js";

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
app.use("/loanType", loanTypeRoutes)



const upload = multer({storage})

app.post('/upload', upload.single('image'), (req,res)=> {
  try {

    return res.status(201).json({
      imageUrl: req.file.path
    })
    
  } catch (error) {
    return res.status(500).json({
      message: "Image not upload",
      error: error.message
    })
  }
})

app.listen(PORT, () => {
  console.log("server is running");
});
