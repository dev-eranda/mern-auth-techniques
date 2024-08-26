import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { connectdb } from "./db/connectdb.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/auth", authRoutes);

app.use(errorHandler);

const isProduction = process.env.NODE_ENV;
const staticDir = isProduction && path.join(__dirname, "frontend/dist"); // info: Adjust this path if needed

if (isProduction) {
  app.use(express.static(staticDir));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(staticDir, "index.html"));
  });
}

// NOTE: NODE_ENV=production pm2 start backend/index.js --name=app

app.listen(PORT, async () => {
  try {
    await connectdb();
    console.log("Server is runnig on port", PORT);
  } catch (error) {
    console.error("Failed to start the server:", error.message);
    process.exit(1);
  }
});
