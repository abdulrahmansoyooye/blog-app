import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import cookieParser from "cookie-parser";
import { connectToDatabase } from "./connect.js";
const app = express();
// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
// Router
app.use("/", userRoutes);
app.use("/profile", profileRoutes);
// Connect Database
connectToDatabase();
// Spin up server
app.listen(3001, () => {
  console.log("SERVER IS WORKING");
});
