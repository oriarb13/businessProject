import Poke from "../PokeComp/PokeComp.jsx";

const HomePage = ({ setChosenPoke, setIsUserClick }) => {
  return (
    <div>
      <h1>Pokemons</h1>
      <Poke setChosenPoke={setChosenPoke} setIsUserClick={setIsUserClick} />
    </div>
  );
};

export default HomePage;
