import { getAll } from '../../utils/GetApi.jsx';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import OnePokemon from '../OnePokemon/OnePokemon.jsx';
import './AllPokemons.css';

const AllPokemons = () => {
  
  const [pokeballData, setPokeballData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getAllPOkes = async () => {
    setLoading(true);
    const data = await getAll();
    setPokeballData(data);
    setLoading(false);
  };

  useEffect(() => {
    getAllPOkes();
  }, []);

  const last = currentPage * 20;
  const first = last - 20;
  const currentPokemons = pokeballData.slice(first, last);

  const totalPages = Math.ceil(pokeballData.length / 20);//for top

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="card-container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          currentPokemons.map((pokemon) => (
            <Link to={`/pokemon/${pokemon.name.toLowerCase()}`} key={pokemon.name}>
              <div className="card">
                <OnePokemon pokemonUrl={pokemon.url} />              
              </div>
            </Link>
          ))
        )}
      </div>

      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}//limit
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}//limit
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllPokemons;
