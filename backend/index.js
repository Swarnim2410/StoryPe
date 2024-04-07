import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToMongo from "./db/connect.js";
import storyRoute from "./routes/story.route.js";
import storyModel from "./models/story.model.js";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Configure CORS to allow requests from your frontend origin
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/api", storyRoute);

// Socket.IO connection
io.on("connection", (socket) => {
  console.log("A user connected");

  // Listen for new story added
  storyModel.watch().on("change", async (change) => {
    try {
      if (change.operationType === "insert") {
        const newStory = await storyModel.findById(change.documentKey._id);
        io.emit("newStory", newStory);
      }
    } catch (error) {
      console.error("Error while emitting new story:", error.message);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("Server");
});

server.listen(PORT, () => {
  try {
    connectToMongo();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});
