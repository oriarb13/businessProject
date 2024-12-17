import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import http from "http";
import { Server as socketIo } from "socket.io";
import setupChatHandlers from "./sockets/chatSocket.js";
const app = express();
const PORT = 3000;

const server = http.createServer(app);

dotenv.config();
app.use(express.json());
app.use(morgan("tiny"));

// Connect to MongoDB
const uri = process.env.DB_URI;
mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

// Socket setup
const io = new socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// Setup Socket event handlers
setupChatHandlers(io);

// Check server status
app.get("/api/status", (req, res) => {
  res.send({ status: "Server is running" });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
