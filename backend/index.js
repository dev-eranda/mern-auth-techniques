import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connectdb } from "./db/connectdb.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectdb();
  console.log("Server is runnig on port", PORT);
});
