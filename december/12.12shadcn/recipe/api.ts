import Recipe from "./src/types/RecipeType";
import axios from "axios";

const API_URL = "http://localhost:5000/recipes";

//all
export const getRecipes = async (): Promise<Recipe[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

// add
export const addRecipe = async (recipe: Recipe): Promise<Recipe> => {
  const response = await axios.post(API_URL, recipe);
  return response.data;
};

//  by id
export const getRecipeById = async (id: string): Promise<Recipe> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// edit by id
export const updateRecipe = async (
  id: string,
  updatedRecipe: Recipe
): Promise<Recipe> => {
  const response = await axios.put(`${API_URL}/${id}`, updatedRecipe);
  return response.data;
};

// delete
export const deleteRecipe = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
