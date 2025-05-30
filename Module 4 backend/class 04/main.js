const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/user.model.js");

const app = express();

const port = 5000;
// mongoose.connect(
 
// );
mongoose.connection.on("connected", () => console.log("Mongo db Connected"));

mongoose.connection.on("error", (error) =>
  console.log("Mongodb not connected URI Mistake")
);
app.use(express.json());

app.post("/create", async (request, response) => {
  console.log("Working..");
  //   let name = request.body.name;
  const userData = await User.create(request.body);

  response.json({ message: "User Created Successfully!", userData });
  //   console.log(request.body); // {name : "Kashan", email : "hell@gmail.com"}
});

app.use(express.json());
app.listen(port, () => {
  console.log(`Server is listening at PORT : ${port}`);
});
