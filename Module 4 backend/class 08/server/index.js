import express from "express";
import mongoose from "mongoose";
import User from "./model/user.js";
import cors from "cors"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();
const PORT = 8080;

//middleware
app.use(express.json());
app.use(cors())

//mongodb connect
const DB_URI =
  "";
mongoose.connect(DB_URI);
mongoose.connection.on("connected", () => console.log("mongodb connected"));
mongoose.connection.on("error", (error) =>
  console.log("mongodb is not  connected")
);

//signup user
app.post("/signup", async (req, res) => {
  try {
    const { email, password, name, phoneNo } = req.body;
    console.log(email);

    if (!email || !password) {
      return res.status(400).json({
        message: "required field is missing",
      });
    }

    const existUser = await User.findOne({ email });
    console.log(existUser);

    if (existUser) {
      return res.status(401).json({
        message: "Email already exist",
      });
    }

    const hashPass = bcrypt.hashSync(password, 10);
    console.log(hashPass);

    const objToSend = {
      name,
      email,
      password: hashPass,
      phoneNo,
    };

    const user = await User.create(objToSend);

    // const user = new User(req.body)
    // await user.save()

    return res.status(201).json({
      message: "User signup successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while signup user",
      error: error.message,
    });
  }
});

//login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "required field is missing",
      });
    }

    const existUser = await User.findOne({ email });
    console.log(existUser);

    if (!existUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const comparePass = bcrypt.compareSync(password, existUser.password);

    if (!comparePass) {
      return res.status(400).json({
        message: "Invalid credentials ",
      });
    }

    const acessToken = jwt.sign(
      {
        name: existUser.name,
        email: existUser.email,
        id: existUser._id,
      },
      "kuchbhi",
      { expiresIn: "15m" }
    );

    const refreshToken = jwt.sign(
      {
        name: existUser.name,
        email: existUser.email,
        id: existUser._id,
      },
      "refresh",
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      message: "User login successfully",
      acessToken,
      refreshToken
      
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while login user",
      error: error.message,
    });
  }
});

//crud


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
