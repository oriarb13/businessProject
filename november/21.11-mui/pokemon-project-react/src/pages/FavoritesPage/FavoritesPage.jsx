import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './FavoritePage.css'
import OnePokemon from '../../components/OnePokemon/OnePokemon.jsx';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  
  useEffect(() => {
    const favoritesPoke = JSON.parse(localStorage.getItem('favoritesPoke')) || [];  
    setFavorites(favoritesPoke); 
  }, []);
  console.log(favorites);

  
  
  console.log(favorites[0])
  return (
    <div>
      <h1>my pokefav</h1>
    <div className="card-container">
      {favorites.length === 0 ? (
        <p>Add a Pokemon to favorites </p>
      ) : (
        favorites.map((pokemon) => (          
          <Link to={`/pokemon/${pokemon.name.toLowerCase()}`} key={pokemon.name}>
            <div className="card">
              <OnePokemon pokemonUrl={pokemon} />
            </div>
          </Link>
        ))
      )}
    </div>
    </div>
  );
  
};

export default Favorites;
