import express from "express"; 
const router = express.Router(); 

import { 
  getAllProducts, 
  getRandomProduct, 
  getProductById, 
  createProduct, 
  updateProduct, 
  deleteProduct 
} from "../controllers/productsControllers.js"; 


// Define product routes
router.get("/", getAllProducts); 
router.get("/random", getRandomProduct); 
router.get("/:id", getProductById); 
router.post("/", createProduct); 
router.patch("/:id", updateProduct); 
router.delete("/:id", deleteProduct); 

export default router; 
