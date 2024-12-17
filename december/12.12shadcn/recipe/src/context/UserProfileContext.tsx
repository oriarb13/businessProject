import React, { createContext, useContext, useState } from "react";
import { UserProfile } from "@/types/ProfileType";
import Recipe from "@/types/RecipeType";

interface UserProfileContextType {
  profile: UserProfile;
  updateProfile: (updatedProfile: UserProfile) => void;
  addFavorite: (recipe: Recipe) => void;
  removeFavorite: (recipeId: string) => void;
}

//  context
const UserProfileContext = createContext<UserProfileContextType | undefined>(
  undefined
);

// provider
export const UserProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "Jane smith",
    email: "jane@snith.com",
    fav: [
      {
        id: "1",
        title: "Pancakes",
        image:
          "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg",
        category: "Breakfast",
        difficulty: "Medium",
        ingredients: [
          "1 cup all-purpose flour",
          "2 tbsp sugar",
          "1 tsp baking powder",
          "1/2 tsp salt",
          "1 cup milk",
          "1 egg",
          "2 tbsp melted butter",
        ],
        instructions:
          "Mix dry ingredients. Add wet ingredients and stir. Cook on a greased pan over medium heat.",
        created_at: "2024-12-12T10:00:00Z",
      },
      {
        id: "2",
        title: "Spaghetti Bolognese",
        image:
          "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg",
        category: "Dinner",
        difficulty: "Medium",
        ingredients: [
          "200g spaghetti",
          "1 onion, chopped",
          "2 cloves garlic, minced",
          "500g ground beef",
          "1 can tomato sauce",
          "Salt and pepper to taste",
          "Fresh basil for garnish",
        ],
        instructions:
          "Cook spaghetti. Sauté onion and garlic, add beef and cook. Add tomato sauce and simmer. Serve with spaghetti.",
        created_at: "2024-12-12T10:15:00Z",
      },
      {
        id: "3",
        title: "Grilled Salmon",
        image:
          "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg",
        category: "Dinner",
        difficulty: "Hard",
        ingredients: [
          "2 salmon fillets",
          "1 tbsp olive oil",
          "1 tsp garlic powder",
          "1 tsp paprika",
          "Salt and pepper to taste",
          "Lemon wedges",
        ],
        instructions:
          "Rub salmon with olive oil and spices. Grill on medium-high heat for 6-8 minutes per side. Serve with lemon wedges.",
        created_at: "2024-12-12T10:00:00Z",
      },
      {
        id: "4",
        title: "Caesar Salad",
        image:
          "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg",
        category: "Lunch",
        difficulty: "Easy",
        ingredients: [
          "2 cups romaine lettuce",
          "1/2 cup croutons",
          "1/4 cup parmesan cheese",
          "2 tbsp Caesar dressing",
        ],
        instructions: "Toss lettuce with dressing, croutons, and parmesan.",
        created_at: "2024-12-12T10:30:00Z",
      },
      {
        id: "5",
        title: "Chicken Tacos",
        image:
          "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg",
        category: "Dinner",
        difficulty: "Medium",
        ingredients: [
          "2 chicken breasts",
          "1 tbsp taco seasoning",
          "4 taco shells",
          "1/4 cup shredded cheese",
          "1/4 cup salsa",
          "Lettuce, sour cream",
        ],
        instructions:
          "Cook chicken with taco seasoning. Shred and serve in taco shells with toppings.",
        created_at: "2024-12-12T10:45:00Z",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1734122415415-88cb1d7d5dc0?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });

  // update
  const updateProfile = (updatedProfile: UserProfile) => {
    setProfile(updatedProfile);
  };

  // add to fav
  const addFavorite = (recipe: Recipe) => {
    setProfile((prev) => ({
      ...prev,
      fav: [...(prev.fav || []), recipe],
    }));
  };

  //remove form fav
  const removeFavorite = (recipeId: string) => {
    setProfile((prev) => ({
      ...prev,
      fav: prev.fav?.filter((recipe) => recipe.id !== recipeId),
    }));
  };

  return (
    <UserProfileContext.Provider
      value={{ profile, updateProfile, addFavorite, removeFavorite }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};

// Custom Hook
export const useUserProfile = (): UserProfileContextType => {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error("useUserProfile must be used within a UserProfileProvider");
  }
  return context;
};
