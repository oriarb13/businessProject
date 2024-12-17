import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Recipe from "@/types/RecipeType";
import { Link, useLocation } from "react-router-dom";

interface PopoverProps {
  fav: Recipe[];
}

export default function PopoverDemo({ fav }: PopoverProps) {
  const location = useLocation();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Favorite Recipes:</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        {fav.length > 0 ? (
          <ul className="text-gray-700 list-disc list-inside">
            {fav.map((recipe) => (
              <li key={recipe.id} className="truncate">
                <Link
                  to={`/recipe/${recipe.id}`}
                  state={{ backgroundLocation: location }}
                  className="underline text-grey-500"
                >
                  {recipe.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No favorite recipes yet.</p>
        )}
      </PopoverContent>
    </Popover>
  );
}
