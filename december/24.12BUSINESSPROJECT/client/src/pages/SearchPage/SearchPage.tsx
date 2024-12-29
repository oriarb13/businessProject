// import { useState, useEffect } from "react";
// import { getRecipes } from "../../../api";
// import Recipe from "@/types/RecipeType";
// import { Badge } from "@/components/ui/badge";
// import {
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import Searched from "./Searched";

// const SearchPage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [difficulty, setDifficulty] = useState<
//     "Medium" | "Hard" | "Easy" | "All"
//   >("All");
//   const [category, setCategory] = useState<
//     "Breakfast" | "Dessert" | "Lunch" | "Dinner" | "All"
//   >("All");
//   const [recipes, setRecipes] = useState<Recipe[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const data = await getRecipes();
//         setRecipes(data);
//       } catch (err) {
//         setError("Failed to load recipes");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRecipes();
//   }, []);

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   const filteredRecipes = recipes.filter((recipe) =>
//     recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const filteredAndSortedRecipes = filteredRecipes
//     .filter((recipe) =>
//       category !== "All" ? recipe.category === category : true
//     )
//     .filter((recipe) =>
//       difficulty !== "All" ? recipe.difficulty === difficulty : true
//     );

//   if (loading) {
//     return (
//       <div className="w-12 h-12 border-4 border-gray-300 rounded-full border-t-blue-500 animate-spin"></div>
//     );
//   }

//   return (
//     <div className="p-4">
//       <div className="mb-4 text-center">
//         <h2 className="text-2xl font-bold text-gray-800">Search Recipes</h2>
//       </div>

//       <div className="flex justify-between mb-4">
//         <div className="flex-1">
//           <Input
//             placeholder="Search by title..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//             className="w-full p-2 border border-gray-300 rounded-md"
//           />
//         </div>

//         <div className="ml-4">
//           <Select value={difficulty} onValueChange={setDifficulty}>
//             <SelectTrigger className="w-full p-2 border border-gray-300 rounded-md">
//               <span>{difficulty || "Select Difficulty"}</span>
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="All">All</SelectItem>
//               <SelectItem value="Easy">Easy</SelectItem>
//               <SelectItem value="Medium">Medium</SelectItem>
//               <SelectItem value="Hard">Hard</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="ml-4">
//           <Select value={category} onValueChange={setCategory}>
//             <SelectTrigger className="w-full p-2 border border-gray-300 rounded-md">
//               <span>{category || "Select Category"}</span>
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="All">All</SelectItem>
//               <SelectItem value="Breakfast">Breakfast</SelectItem>
//               <SelectItem value="Lunch">Lunch</SelectItem>
//               <SelectItem value="Dinner">Dinner</SelectItem>
//               <SelectItem value="Dessert">Dessert</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//         {filteredAndSortedRecipes.length > 0 ? (
//           filteredAndSortedRecipes.map((recipe) => (
//             <div key={recipe.id} className="rounded-lg shadow-md">
//               <Searched recipe={recipe} />
//             </div>
//           ))
//         ) : (
//           <div className="text-center text-gray-500 col-span-full">
//             No recipes found
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchPage;
