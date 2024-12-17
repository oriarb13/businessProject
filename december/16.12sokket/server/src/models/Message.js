import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    room: { type: String, required: true },
    username: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
    default: Date.now,
  }
);
export default mongoose.model("Message", messageSchema);
