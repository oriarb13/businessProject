const PokemonCard = ({ pokemon }) => {
    const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`; // תמונה של הפוקימון
  
    return (
      <div className="pokemon-card">
        <h2>{pokemon.name}</h2> {/* שם הפוקימון */}
        <img src={pokemonImageUrl} alt={pokemon.name} width="200" height="200" /> {/* התמונה של הפוקימון */}
      </div>
    );
  };
  
  export default PokemonCard;
  