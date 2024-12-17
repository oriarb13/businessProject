import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  email: { type: String, required: true ,unique:true },
  phoneNumber:{type: String, required: true ,unique:true}
});

export default mongoose.model("User", userSchema);
