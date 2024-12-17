import express from "express"; 
const router = express.Router(); 

import { 
  getAllProjects, 
  getRandomProject, 
  getProjectById, 
  createProject, 
  updateProject, 
  deleteProject 
} from "../controllers/projectsControllers.js"; 

//get all
router.get("/", getAllProjects);
//random 
router.get("/random", getRandomProject); 
//by id
router.get("/:id", getProjectById); 
//create
router.post("/", createProject); 
//edit
router.patch("/:id", updateProject); 
//delete
router.delete("/:id", deleteProject); 

export default router; 
