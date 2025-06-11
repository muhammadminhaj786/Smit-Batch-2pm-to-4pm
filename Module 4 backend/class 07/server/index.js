import express from "express";
import mongoose from "mongoose";
import User from "./model/user.js";
import cors from "cors";

const app = express();
const PORT = 8080;

//middleware
app.use(express.json());
app.use(cors(
   { origin: "*",
    methods: ["GET","POST","DELETE",  "PUT"]

   }
))

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
    const { email, password } = req.body;
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

    const user = await User.create(req.body);

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
app.post('/login', (req,res)=>{
    try {

        const {email,password} = req.body

        if (!email || !password) {
            return res.status(400).json({
              message: "required field is missing",
            });
          }
        
        
        
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while login user",
            error: error.message
        })
    }
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
