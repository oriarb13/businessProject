import express from "express"; 
const router = express.Router(); 

import { 
  getAllJokes, 
  getRandomJoke, 
  getJokeById, 
  createJoke, 
  updateJoke, 
  deleteJoke 
} from "../controllers/jokesControllers.js"; 


// Define routes with controller functions
router.get("/", getAllJokes); 
router.get("/random", getRandomJoke); 
router.get("/:id", getJokeById); 
router.post("/", createJoke); 
router.patch("/:id", updateJoke); 
router.delete("/:id", deleteJoke); 

export default router; 
