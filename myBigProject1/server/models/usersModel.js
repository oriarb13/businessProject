import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true,unique:true },
  email: { type: String, required: true ,unique:true },
  password: { type: String, required: true },
  role: { type: String, enum: ['User', 'Admin'], default: 'User' },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }], 
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }], 
},{
  timestamps: true
});

export default mongoose.model("User", userSchema);
