import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
