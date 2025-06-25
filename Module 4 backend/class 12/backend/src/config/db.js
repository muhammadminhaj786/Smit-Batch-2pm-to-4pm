
import mongoose from "mongoose";





const connectDB = async () => {
  try {
    const mongoConnect = await mongoose.connect(
      process.env.MONODB_URI
    );

    console.log('mongo db connected')
  } catch (error) {
    console.log("mongo db not connected", error.message);
  }
};

export default connectDB;
