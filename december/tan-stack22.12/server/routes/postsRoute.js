import express from "express";
import {
  getAllPosts,
  getPostById,
  createPost,
  editPost,
  deletePost,
} from "../controllers/postController.js";

const router = express.Router();

//  all posts
router.get("/", getAllPosts);

// post by post id
router.get("/:id", getPostById);

// Create a new post
router.post("/", createPost);

//edit id
router.put("/:id", editPost);

// Delete a post by ID
router.delete("/:id", deletePost);

export default router;
