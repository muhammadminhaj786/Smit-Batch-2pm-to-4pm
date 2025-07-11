import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
export const createUser = async (req, res) => {
  try {
    const { email } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(401).json({
        message: "User  already exist",
      });
    }

    const otp = Math.floor(Math.random() * 9000) + 1000;

    const sendToObj = {
      ...req.body,
      otp,
    };

    const userData = await User.create(sendToObj);
    let token = jwt.sign({ id: userData._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const trasnporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "eb20103087.minhajwahid@gmail.com",
        pass: "yrvornwwvsyhzmrf",
      },
    });

    const mailOption = {
      from: "eb20103087.minhajwahid@gmail.com",
      to: email,
      subject: "Your OTP Code",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #333;">Welcome to Our Website</h2>
          <p>Hi there,</p>
          <p>Thank you for registering. Please use the following One-Time Password (OTP) to verify your email address:</p>
          <h3 style="color: #0056b3;">${otp}</h3>
          <p>This OTP is valid for 10 minutes. Please do not share it with anyone.</p>
          <br>
          <p>Regards,<br>Team</p>
        </div>
      `,
    };

    await trasnporter.sendMail(mailOption);

    res.status(201).json({
      message: "User created",
      userData,
      token,
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

      if (!userExist.isActive) {
        return res.status(401).json({
          message: "Please verify your email",
        });
      }

      let token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({
        message: "Login Successfull",
        userExist,
        token,
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

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const userExist = await User.findOne({ email });

    console.log(userExist);

    if (userExist.otp != otp) {
      return res.status(401).json({
        message: "wrong otp",
      });
    }

    userExist.isActive = true;

    await userExist.save();

    return res.status(201).json({
      message: "Email verified successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred while verify otp",
      error: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
export const getAllUser = async (req, res) => {
  try {
    const user = await User.find();

    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
