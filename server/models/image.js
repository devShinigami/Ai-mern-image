import mongoose from "mongoose";
const Image = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

const postSchema = mongoose.model("images", Image);

export default postSchema;
