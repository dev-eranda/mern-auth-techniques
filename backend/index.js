import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import { connectdb } from "./db/connectdb.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, async () => {
  try {
    await connectdb();
    console.log("Server is runnig on port", PORT);
  } catch (error) {
    console.error("Failed to start the server:", error.message);
    process.exit(1);
  }
});
