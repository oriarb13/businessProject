import axios from "axios";
import { Post } from "../types/types";

const base_url = "http://localhost:3000/api/posts/";

// Fetch posts with pagination and search
export const getPosts = async ({
  page,
  limit,
  search,
}: {
  page: number;
  limit: number;
  search: string;
}): Promise<{ posts: Post[]; total: number }> => {
  const { data } = await axios.get(base_url, {
    params: { page, limit, search },
  });
  return data;
};

// Fetch single post
export const getPost = async (id: string): Promise<Post> => {
  const { data } = await axios.get(`${base_url}${id}`);
  return data;
};

// Create a new post
export const createPost = async (post: {
  title: string;
  content: string;
}): Promise<Post> => {
  const { data } = await axios.post(base_url, post);
  return data.post;
};

// Update an existing post
export const updatePost = async (
  id: string,
  updates: Partial<Post>
): Promise<Post> => {
  const { data } = await axios.put(`${base_url}${id}`, updates);
  return data.post;
};

// Delete a post
export const deletePost = async (id: string): Promise<Post> => {
  const { data } = await axios.delete(`${base_url}${id}`);
  return data.post;
};
