import express from "express"; 
const router = express.Router(); 

import { 
  getAllTasks, 
  getRandomTask, 
  getTaskById, 
  createTask, 
  updateTask, 
  deleteTask 
} from "../controllers/TasksControllers.js"; 


//get all
router.get("/", getAllTasks);
//random 
router.get("/random", getRandomTask); 
//by id
router.get("/:id", getTaskById); 
//create
router.post("/", createTask); 
//edit
router.patch("/:id", updateTask); 
//delete
router.delete("/:id", deleteTask); 

export default router; 

