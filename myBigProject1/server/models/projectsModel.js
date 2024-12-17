import mongoose from "mongoose";


const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: String,
  owner: [{ type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required:true ,  
    validate: {
      validator: function(value) {
        return value.length === 1;
      },
      message: 'Project should have exactly one owner'
    }
  }],
  collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  status: { 
    type: String, 
    enum: ['Not Started', 'In Progress', 'Completed'], 
    default: 'Not Started' 
  },
  startDate: { 
    type: Date, 
    required: true,
    validate: {
      validator: function(date) {
        return date <= new Date(); 
      },
      message: 'Start date must be in the past or present'
    }
  },
  endDate: {
    type: Date,
    validate: {
      validator: function(date) {
        return date > this.startDate;
      },
      message: 'End date must be later than start date'
    }
  }
  },{
    timestamps: true
  }
);

export default mongoose.model("Project", projectSchema);
