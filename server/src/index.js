import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import imageRoutes from "../routes/imageRoutes.js";
import dalleRoutes from "../routes/dalleRoutes.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const connectdb = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => {
      console.log("mongodb connected");
    })
    .catch((err) => console.log(err));
};

connectdb(process.env.MONGODB_URL);

app.use("/api/v1/dalle", dalleRoutes);
app.use("/api/v1/images", imageRoutes);

app.get("/", (req, res) => {
  res.send("Hello From DALL-E");
});

app.listen("3001", () => {
  console.log("SERVER RUNNING");
});
