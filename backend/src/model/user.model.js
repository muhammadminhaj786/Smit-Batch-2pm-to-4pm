import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String
  },

  profileImage: {
    type:String
  },

  password: {
    type: String,
    required: true,
  },
});

const User = model("Auth", userSchema);

export default User;
