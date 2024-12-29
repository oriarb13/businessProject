// import Recipe from "@/types/RecipeType";
// import { Badge } from "@/components/ui/badge";
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";

// interface OneRecipeProps {
//   recipe: Recipe;
// }

// const Searched = ({ recipe }: OneRecipeProps) => {
//   const location = useLocation();

//   return (
//     <Link
//       to={`/recipe/${recipe.id}`}
//       state={{ backgroundLocation: location }}
//       className="text-gray-500 underline"
//     >
//       <Card key={recipe.id} className="rounded-lg shadow-md">
//         <CardHeader className="relative">
//           <img
//             src={recipe.image}
//             alt={recipe.title}
//             className="object-cover w-full h-48 rounded-t-lg"
//           />
//         </CardHeader>
//         <CardContent className="p-4">
//           <h3 className="text-xl font-semibold text-gray-800">
//             {recipe.title}
//           </h3>
//           <div className="flex gap-2 mt-2">
//             <Badge variant="secondary">{recipe.category}</Badge>
//             <Badge variant="secondary">{recipe.difficulty}</Badge>
//           </div>
//         </CardContent>
//         <CardFooter className="p-4">
//           <Button className="w-full">View Recipe</Button>
//         </CardFooter>
//       </Card>
//     </Link>
//   );
// };
// export default Searched;
