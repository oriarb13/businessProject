import { useState, useEffect } from "react";
import styles from "./OnePokemon.module.css";
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import { isFavoritePoke, addFavorite, removeFavorite } from "../../utils/favoritehandle";
import { getPokemon } from "../../utils/GetApi.jsx";

const OnePokemon = ({ pokemonUrl }) => {
  const [Data, setData] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const getPok = async () => {
    const data = await getPokemon(pokemonUrl);
    setData(data);
  };

  useEffect(() => {
    if (typeof pokemonUrl === "object" && pokemonUrl) {
      setData(pokemonUrl);
    } else {
      getPok();
    }
  }, [pokemonUrl]);  

  useEffect(() => {
    if (Data) {
      setIsFavorite(isFavoritePoke(Data));
    }
  }, [Data]);

  const handleFavorite = (event) => {
    event.preventDefault();
    isFavorite ? removeFavorite(Data) : addFavorite(Data);
    setIsFavorite(!isFavorite);
  };

  if (!Data) {
    return <div>Loading</div>;  
  }

  const name = Data.forms && Data.forms[0] ? Data.forms[0].name : Data.name;
  const sprite = Data.sprites && Data.sprites.other ? Data.sprites.other.showdown.front_default : 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExamZyaGNtbHN2NTdocDB6YjhyZ21tMG13NjV2eXF1YndiODVmMWZwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hv13U4h8Y7hEdCQ0Ik/giphy.webp';
  // console.log(Data.sprites.other.showdown.front_default);
  
  const ability = Data.abilities && Data.abilities[0] ? Data.abilities[0].ability.name : 'Unknown Ability';
  const type = Data.types && Data.types[0] ? Data.types[0].type.name : 'normal';
  console.log(type);
  

  return (
    <div className={styles[type]?styles[type]:styles["normal"] + " " + styles.card}>
      <div style={{ display: `flex` }}>
        <span
          onClick={handleFavorite}
          style={{
            cursor: "pointer",
            color: isFavorite ? "red" : "gray",
            fontSize: "30px",
          }}
        >
          <FavoriteIcon sx={{ color: isFavorite ? 'red' : 'gray', fontSize: '50px' }} />
        </span>
        <h2>{name}</h2>
      </div>
      <img
        src={sprite}
        alt={name}
        style={{ width: '120px', height: '120px' }}
      />
      <p>Ability: {ability}</p>
      <p>Type: {type}</p>
    </div>
  );
};

export default OnePokemon;
