import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/database.js";
dotenv.config({
  path: "./.env",
});
const app = express();

// middlewares
app.use(express.json());

const PORT = process.env.PORT || 5000;

// database connection
connectDB();

// server connection
app.listen(PORT, () => {
  console.log(`Server Started On Port ${PORT}`);
});
