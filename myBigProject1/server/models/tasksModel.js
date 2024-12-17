import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  description: { type: String, required: true,unique:true },
  dueDate: { type: Date, required: true },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true }, 
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'], default: 'Not Started' },
},{
  timestamps: true
}
);

export default mongoose.model("Task", taskSchema);

