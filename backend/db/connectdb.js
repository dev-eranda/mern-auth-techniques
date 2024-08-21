import mongoose from "mongoose";

export const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Error connection to db", error.message);
    process.exit(1); // INFO: 1 is failure, 0 is success
  }
};
