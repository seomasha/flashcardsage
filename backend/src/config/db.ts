import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    console.log("MongoDB has been connected.");
  } catch (error) {
    console.error(`An error has ocurred: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
