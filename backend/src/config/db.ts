import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://maseticsead:VTV27VGbofok90fx@cluster0.lijiq.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("MongoDB has been connected.");
  } catch (error) {
    console.error(`An error has ocurred: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
