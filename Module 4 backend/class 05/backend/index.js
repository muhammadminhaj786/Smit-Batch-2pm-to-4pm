import express from "express";
import mongoose from "mongoose";
import productModel from "./Model/product.js";

const app = express();
const PORT = 8080;
app.use(express.json());
mongoose.connect(
  "mongodb+srv://eb20103087minhajwahid:minhaj@cluster0.dfn61hb.mongodb.net/"
);
mongoose.connection.on("connected", () => {
  console.log("Mongodb Connected");
});
mongoose.connection.on("error", (error) => console.log(error));

app.get("/get", (request, response) => {
  console.log("Get Is Working");
  response.send("Hello It is working!");
});

app.post("/create", async (request, response) => {
  const product = await productModel.create(request.body);
  response.json({
    message: "Product Added Successfully",
    product,
  });
});

app.listen(PORT, () => {
  console.log("Server is listening!!");
});
