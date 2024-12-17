import express from "express"; 
import { 
  getAllUsers, 
  getRandomUser, 
  createUser, 
  getUserById, 
  updateUser, 
  deleteUser 
} from "../controllers/usersControllers.js"; 

const router = express.Router(); 

// Define user routes
router.get("/", getAllUsers); 
router.get("/random", getRandomUser); 
router.post("/", createUser); 
router.get("/:id", getUserById); 
router.patch("/:id", updateUser); 
router.delete("/:id", deleteUser); 

export default router; 
