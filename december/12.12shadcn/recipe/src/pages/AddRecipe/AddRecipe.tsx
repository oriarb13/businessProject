import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { addRecipe } from "../../../api";
import Recipe from "@/types/RecipeType";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState<
    "Breakfast" | "Dessert" | "Lunch" | "Dinner"
  >("Breakfast");
  const [difficulty, setDifficulty] = useState<"Easy" | "Medium" | "Hard">(
    "Easy"
  );
  const [ingredients, setIngredients] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newRecipe: Recipe = {
      title,
      image,
      category,
      difficulty,
      created_at: new Date().toISOString(),
      ingredients: ingredients.split("\n"),
      instructions,
    };

    try {
      await addRecipe(newRecipe);
      alert("Recipe added successfully!");
      setTitle("");
      setImage("");
      setCategory("Breakfast");
      setDifficulty("Easy");
      setIngredients("");
      setInstructions("");
    } catch (error) {
      alert("Failed to add recipe.");
    }
  };

  return (
    <div>
      <div className="p-6 mx-auto mt-20 text-gray-600 bg-white rounded-lg shadow-md max2-w-lg ">
        <h2 className="mb-6 text-2xl font-bold text-center ">Add New Recipe</h2>
        <form onSubmit={handleSubmit}>
          {/* title */}
          <div className="mb-4">
            <Label htmlFor="title">Recipe Title</Label>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter recipe title"
              required
            />
          </div>

          {/* image */}
          <div className="mb-4">
            <Label htmlFor="image">Image URL</Label>
            <Input
              id="image"
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* category */}
          <div className="mb-4">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Breakfast">Breakfast</SelectItem>
                <SelectItem value="Dessert">Dessert</SelectItem>
                <SelectItem value="Lunch">Lunch</SelectItem>
                <SelectItem value="Dinner">Dinner</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* difficulty */}
          <div className="mb-4">
            <Label htmlFor="difficulty">Difficulty</Label>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger>
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* ingredients */}
          <div className="mb-4">
            <Label htmlFor="ingredients">Ingredients</Label>
            <Textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Enter ingredients (one per line)"
              rows={4}
              required
            />
          </div>

          {/* instructions */}
          <div className="mb-4">
            <Label htmlFor="instructions">Instructions</Label>
            <Textarea
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Enter instructions"
              rows={4}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full mt-6 bg-slate-600 hover:bg-slate-500"
          >
            Add Recipe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
