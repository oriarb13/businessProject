import { getAll } from '../../utils/GetApi.jsx';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { TextField, Button, Card, CardContent } from '@mui/material';

import OnePokemon from '../../components/OnePokemon/OnePokemon.jsx';

const Search = () => {
  const [input, setInput] = useState('');
  const [Pokemons, setPokemons] = useState([]);

  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  const searchPokemons = async () => {
    if (!input) {
      setPokemons([]); 
      return;
    }

      const response = await getAll(); 
      const filtered = response.filter(pokemon =>
        pokemon.name.toLowerCase().includes(input.toLowerCase())
      );

      setPokemons(filtered); 
  };

  useEffect(() => {
    searchPokemons();
  }, [input]);

  const handleSub = (e) => {
    e.preventDefault();
    setInput("")
  };

  return (
    <div style={{ maxWidth: '800px', padding: '20px',marginTop:'60px' }}>
      <form onSubmit={handleSub} style={{ display: 'flex', marginBottom: '20px' }}>
        <TextField
          label="Pokemon Name"
          variant="outlined"
          value={input}
          onChange={handleSearch}
          fullWidth
          style={{ marginRight: '10px' }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ height: '100%' }}
        >
          clear 
        </Button>
      </form>

       
        <div>
          {Pokemons.length > 0 ? (
            Pokemons.map((pokemon) => (
              <Link to={`/pokemon/${pokemon.name.toLowerCase()}`} key={pokemon.name}>
                <Card style={{ marginBottom: '20px', padding: '10px' }}>
                  <CardContent>
                    <OnePokemon pokemonUrl={pokemon.url} />
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <p>No pokemons found</p>
          )}
        </div>
      
    </div>
  );
};

export default Search;
