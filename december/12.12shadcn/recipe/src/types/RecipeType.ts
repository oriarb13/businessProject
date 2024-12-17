export default interface Recipe {
  id?: string;
  title: string;
  image: string;
  category: "Breakfast" | "Dessert" | "Lunch" | "Dinner";
  difficulty: "Medium" | "Hard" | "Easy";
  created_at: string;
  ingredients?: string[];
  instructions?: string;
}
