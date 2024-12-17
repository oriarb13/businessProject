// get
export const getFavorites = () => {
    const favorites = localStorage.getItem("favoritesPoke");
    return favorites ? JSON.parse(favorites) : []; 
  };
  
  // add
  export const addFavorite = (pokemon) => {
    const favorites = getFavorites();
    if (!favorites.some(fav => fav.name === pokemon.name)) {
      favorites.push(pokemon); 
      localStorage.setItem("favoritesPoke", JSON.stringify(favorites));
    }
  };
  
  //remove
  export const removeFavorite = (pokemon) => {
    let favorites = getFavorites();
    favorites = favorites.filter(fav => fav.name !== pokemon.name);
    localStorage.setItem("favoritesPoke", JSON.stringify(favorites));
  };

  //is fav
  export const isFavoritePoke = (pokemon) => {
    const favorites = getFavorites();
    return favorites.some(fav => fav.name === pokemon.name);
  };