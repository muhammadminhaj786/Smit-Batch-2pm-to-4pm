import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

export const adminVerify = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];
  console.log(token);

  jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
    if (err) {
      return res.status(401).json({
        message: "unauthorized token",
      });
    }
    const userData = await User.findById(user.id);

    if (userData.userType === "admin") {
      next();
    } else {
      return res.status(401).json({
        message: "unauthorized user",
      });
    }
    req.user = user;
  });

  // next()
};
