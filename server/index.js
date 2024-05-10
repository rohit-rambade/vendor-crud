import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/database.js";
dotenv.config({
  path: "./.env",
});

//cors
import cors from "cors";

// routes

import userRoute from "./routes/user.auth.routes.js";
import vendorRoute from "./routes/vendor.routes.js";

const app = express();

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 5000;

// database connection
connectDB();

//routes
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/api/auth", userRoute);

//vendor routes

app.use("/api/vendors", vendorRoute);

// server connection
app.listen(PORT, () => {
  console.log(`Server Started On Port ${PORT}`);
});
