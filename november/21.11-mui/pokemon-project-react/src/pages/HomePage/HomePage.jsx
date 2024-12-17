import AllPokemons from "../../components/allPokemons/AllPokemons.jsx";
import bg from "../../assets/pokemonredbgc.png";

const Home = ({}) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundImage: `url(${bg})`, 
        backgroundSize: 'cover',  
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat', 
        backgroundAttachment: 'fixed', 
        width: '100vw',  
        height: '100vh', 
      }}
    >
      <div
        style={{
          zIndex: 1,
          position: 'relative',
          color: 'gold',
          textAlign: 'center',
          paddingTop: '30px',
        }}
      >
        <h1>Pokemons</h1>
      </div>
      <div
        style={{
          zIndex: 2,
          position: 'relative',
          padding: '20px',
          height: 'calc(100vh - 100px)',
          overflowY: 'auto', 
        }}
      >
        <AllPokemons />
      </div>
    </div>
  );
};

export default Home;
