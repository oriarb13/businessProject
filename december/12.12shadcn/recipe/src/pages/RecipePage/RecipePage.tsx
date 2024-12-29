import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Recipe from "@/types/RecipeType";
import { getRecipeById } from "../../../api";

import OneRecipe from "@/components/comp/OneRecipe";
const RecipePage = () => {
  const { title } = useParams(); // מקבלים את הטייטל מה-URL
  console.log("Recipe title from URL:", title); // הדפסת הטייטל מה-URL

  const navigate = useNavigate();

  const closeModal = () => {
    navigate(-1); // חזרה לעמוד הקודם
  };

  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // פונקציה לטעינת הרסיפ לפי טייטל
  useEffect(() => {
    if (!title) {
      console.log("No title provided in the URL");
      setError("Recipe title is missing");
      setLoading(false);
      return;
    }

    const fetchRecipe = async () => {
      try {
        // קריאה ל-API עם הטייטל
        const data = await getRecipeById(title);
        console.log("Fetched recipe data:", data); // הדפסת התשובה מה-API
        setRecipe(data);
      } catch (err) {
        console.error("Error fetching recipe:", err);
        setError("Failed to load recipe"); // אם יש שגיאה, נעדכן את השגיאה
      } finally {
        setLoading(false); // סיום הטעינה
      }
    };

    fetchRecipe(); // קריאה לפונקציה כדי לטעון את הרסיפ
  }, [title]);

  if (loading) {
    console.log("Loading..."); // לוג בזמן טעינה
    return (
      <div className="w-12 h-12 border-4 border-gray-300 rounded-full border-t-blue-500 animate-spin"></div>
    );
  }

  // אם יש שגיאה, הצג את השגיאה בתוך המודאל
  if (error) {
    console.log("Error message:", error); // לוג אם יש שגיאה
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-red-500">
            {error}
          </h2>
        </div>
      </div>
    );
  }

  // אם לא נמצא רסיפ או לא התקבל נתון
  if (!recipe) {
    console.log("Recipe not found"); // לוג אם לא נמצא רסיפ
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-red-500">
            Recipe not found
          </h2>

          <button
            onClick={closeModal}
            className="px-4 py-12 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // הצגת המודאל עם הרסיפ שנמצא
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-black rounded-lg shadow-lg">
        <OneRecipe key={recipe.id} recipe={recipe} />
        <button
          onClick={closeModal}
          className="p-2 mt-4 text-black bg-gray-800 rounded-md hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RecipePage;
