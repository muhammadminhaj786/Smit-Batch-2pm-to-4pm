const { default: mongoose } = require("mongoose");

const nameSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const Name = mongoose.model("names", nameSchema);
module.exports = Name;
