import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "../src/config/db.js";
import dotenv from "dotenv";
// import rateLimiter from "./middleware/rateLimiter.js";

// const express = require("express");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(express.json()); // this middleware will parse JSON bodies: req.body
// app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started on PORT:${PORT}`);
  });
});
