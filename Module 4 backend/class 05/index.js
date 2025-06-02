const express = require("express");
const { default: mongoose } = require("mongoose");
const User = require("./model/user");

const app = express();
const PORT = 5000;

app.use(express.json());

mongoose.connect(
  "mongodb+srv://eb20103087minhajwahid:minhaj@cluster0.dfn61hb.mongodb.net/"
);
mongoose.connection.on("connected", () => console.log("mongo db is connected"));
mongoose.connection.on("error", (error) =>
  console.log("mongodb not connected")
);

app.get("/minhaj", (request, response) => {
  response.send("minhaj");
});

app.get("/", (request, response) => {
  response.send("hello world");
});

app.post("/product", (request, response) => {
  console.log(request.body);
  if (request.body.name == "minhaj") {
    User.create(request.body);

    response.send("ok");
  } else {
    response.send("not ok");
  }
});

app.listen(PORT, () => {
  console.log("server is running");
});
