import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/database.js";
dotenv.config({
  path: "./.env",
});

// routes

import userRoute from "./routes/user.auth.routes.js";

const app = express();

// middlewares
app.use(express.json());

const PORT = process.env.PORT || 5000;

// database connection
connectDB();

//routes

app.use("/api/auth", userRoute);

// server connection
app.listen(PORT, () => {
  console.log(`Server Started On Port ${PORT}`);
});
