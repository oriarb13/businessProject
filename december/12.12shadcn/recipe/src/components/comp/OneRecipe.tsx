import Recipe from "@/types/RecipeType";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "../ui/badge";
import { Link, useLocation, useParams } from "react-router-dom";

interface OneRecipeProps {
  recipe: Recipe;
}

const OneRecipe = ({ recipe }: OneRecipeProps) => {
  const location = useLocation();
  const { title } = useParams();

  return (
    <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div>
        {!title ? (
          <Link
            to={`/recipe/${recipe.id}`}
            state={{ backgroundLocation: location }}
            className="text-gray-500 underline"
          >
            <h2 className="text-lg font-bold">{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} className="rounded-lg" />
          </Link>
        ) : (
          <>
            <h2 className="text-lg font-bold">{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} className="rounded-lg" />
          </>
        )}
      </div>
      <Badge variant={"secondary"}> Category: {recipe.category}</Badge>
      <Badge variant={"secondary"}> Difficulty: {recipe.difficulty}</Badge>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Instructions:</AccordionTrigger>
          <AccordionContent>{recipe.instructions}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Ingredients:</AccordionTrigger>
          <AccordionContent>
            <Table>
              <TableBody>
                {recipe.ingredients.map((ingr, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{index + 1}.</TableCell>
                    <TableCell className="font-medium">{ingr}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default OneRecipe;
