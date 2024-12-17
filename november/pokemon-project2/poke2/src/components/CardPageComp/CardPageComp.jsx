import { getPokemon } from "../../utils/getAllPoke.jsx";
import { useState, useEffect } from "react";

const CardPage = ({ chosenPoke }) => {
  const [data, setData] = useState(null);

  const getPoke = async () => {
    const data = await getPokemon(chosenPoke);
    setData(data);
  };

  useEffect(() => {
    getPoke();
  }, []);

  console.log(data);
  const pokeId = data?.id;
  const gifUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokeId}.gif`;

  return (
    data && (
      <>
        <div>
          <h1>{data.name}</h1> {/* שם הפוקימון */}
          <img src={gifUrl} alt="Pokemon GIF" width="500" height="500" />
        </div>
      </>
    )
  );
};

export default CardPage;
