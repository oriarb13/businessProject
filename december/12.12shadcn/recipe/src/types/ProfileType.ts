import Recipe from "./RecipeType";
export interface UserProfile {
    name: string;
    email: string;
    fav?:Recipe[]
    image:string;
  }
  