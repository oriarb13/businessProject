import Post from "../models/postModel.js";

// Get all posts
export const getAllPosts = async (req, res) => {
  const { page = 1, limit = 10, search = "" } = req.query;

  try {
    const query = search
      ? {
          $or: [
            { title: { $regex: search, $options: "i" } },
            { content: { $regex: search, $options: "i" } },
          ],
        }
      : {};

    const posts = await Post.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Post.countDocuments(query);

    res.status(200).json({ posts, total });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Unknown server error." });
  }
};

// Get post by ID
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: "Post not found." });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error("Error finding post by ID:", error);
    res.status(500).json({ error: "Server error." });
  }
};

// Create post
export const createPost = async (req, res) => {
  const { content, title } = req.body;

  if (!content || !title) {
    return res.status(400).json({ error: "Content and title are required." });
  }

  try {
    const newPost = new Post({
      content,
      title,
    });

    const savedPost = await newPost.save();
    res.status(201).send({
      status: "Post successfully created",
      post: savedPost,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Server error. Could not create post." });
  }
};

// Edit post
export const editPost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title && !content) {
    return res
      .status(400)
      .json({ error: "At least one field is required to update." });
  }

  const updateData = {};
  if (title) updateData.title = title;
  if (content) updateData.content = content;

  try {
    const updatedPost = await Post.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedPost) {
      return res.status(404).send({ error: "Post not found." });
    }
    res
      .status(200)
      .send({ message: "Post updated successfully", post: updatedPost });
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ error: "Server error." });
  }
};

// Delete a post by ID
export const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).send({ error: "Post not found." });
    }
    res.status(200).send({
      message: "Post deleted successfully",
      post: deletedPost,
    });
  } catch (error) {
    console.error("Error deleting post by ID:", error);
    res.status(500).json({ error: "Server error." });
  }
};
