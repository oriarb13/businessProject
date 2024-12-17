import { useEffect, useState } from "react";
import Recipe from "@/types/RecipeType";
import { getRecipes } from "../../../api";
import OneRecipe from "@/components/comp/OneRecipe";

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipes();
        setRecipes(data);
      } catch (err) {
        setError("Failed to load recipes");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading)
    return (
      <div className="w-12 h-12 border-4 border-gray-300 rounded-full border-t-blue-500 animate-spin"></div>
    );
  if (error) return <div className="text-xl">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Recipe List</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <OneRecipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
