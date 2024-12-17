import Task from "../models/tasksModel.js"; 

// Get all tasks
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find(); 
    if (tasks.length === 0) { 
      return res.status(404).json({ message: "Add a new task to see the tasks." }); 
    }
    res.status(200).json(tasks); 
  } catch (error) {
    console.error("Error fetching tasks:", error);   
    res.status(500).json({ error: "Unknown server error" });  
  }
};

// Get a random task
export const getRandomTask = async (req, res) => {
  try {
    const randomTask = await Task.aggregate([{ $sample: { size: 1 } }]); 
    if (randomTask.length === 0) { 
      return res.status(404).json({ message: "Add a new task to see the tasks." }); 
    }
    res.status(200).json(randomTask[0]); 
  } catch (error) {
    console.error("Error fetching random task:", error);  
    res.status(500).json({ error: "Unknown server error" });  
  }
};

// Get a specific task by ID
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id); 
    if (!task) { 
      return res.status(404).json({ error: "Task not found" });  
    }
    res.status(200).json(task); 
  } catch (error) {
    console.error("Error finding task by ID:", error);  
    res.status(500).json({ error: "Server error" });  
  }
};

// Create a new task
export const createTask = async (req, res) => {
  const { description, status, dueDate, assignedTo, project } = req.body; 
  
  // Check for required fields
  if (!description || !dueDate || !project) {
    return res.status(400).json({ error: "Description, due date, and project are required" }); 
  }

  try {
    const newTask = new Task({
      description,
      status,
      dueDate,
      assignedTo,
      project,
    });

    await newTask.save();
    res.status(201).json({ message: "Task created successfully!", task: newTask }); 
  } catch (error) {
    console.error("Error saving new task:", error);  
    res.status(500).json({ error: "Server error" });  
  }
};

// Update an existing task
export const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); 
    if (!updatedTask) { 
      return res.status(404).json({ error: "Task not found" });  
    }
    res.status(200).json({ message: "Task updated successfully", task: updatedTask }); 
  } catch (error) {
    console.error("Error updating task:", error);  
    res.status(500).json({ error: "Server error" });  
  }
};

// Delete a task by ID
export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id); 
    if (!deletedTask) { 
      return res.status(404).json({ error: "Task not found" });  
    }
    res.status(200).json({ message: "Task deleted successfully", task: deletedTask }); 
  } catch (error) {
    console.error("Error deleting task:", error);  
    res.status(500).json({ error: "Server error" });  
  }
};
