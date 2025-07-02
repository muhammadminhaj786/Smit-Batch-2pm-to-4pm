import mongoose from "mongoose";

const connectDb = () => {
  try {
    const connect = mongoose.connect(process.env.MONODB_URI);
    console.log("Mongodb Connected");
  } catch (error) {
    console.log("mongoDb is not connected", error.message);
  }
};

export default connectDb;
