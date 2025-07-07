import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
export const createUser = async (req, res) => {
  try {
    const { email } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(401).json({
        message: "User  already exist",
      });
    }

    const userData = await User.create(req.body);
    let token = jwt.sign({ id: userData._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({
      message: "User created",
      userData,
      token
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      const existPassword = password === userExist.password;
      if (!existPassword) {
        return res.status(401).json({
          message: "user credentials are wrong",
        });
      }
      let token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({
        message: "Login Successfull",
        userExist,
        token
      });
    }
    res.status(401).json({
      message: "user credentials are wrong",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};



export const getUser = async (req,res)=> {
  try {

    const {id} = req.params

    const user = await User.findById(id)

    if(!user){
      return res.status(404).json({
        message: "user not found"
    })
    }

    return res.status(200).json(user)

    
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}