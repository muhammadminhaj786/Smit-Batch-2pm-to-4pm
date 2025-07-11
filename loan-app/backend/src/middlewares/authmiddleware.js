import jwt from "jsonwebtoken";

export const authVerify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1]
  console.log(token)

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({
        message: "unauthorized user",
      });
    }

    req.user = user
    next()
  });

  // next()
};
