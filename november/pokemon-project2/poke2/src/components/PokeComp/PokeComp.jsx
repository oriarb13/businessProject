import { getAllPoke } from "../../utils/getAllPoke.jsx";
import { useState,useEffect } from "react";

const Poke=({setChosenPoke,setIsUserClick})=>{
    const [pokeData,setPokeData] = useState(null)

    const getAllPokemons = async ()=>{
        const data = await getAllPoke();
        setPokeData(data)
    }

    useEffect(()=>{
        getAllPokemons()
    },[]);

    const IsUserClickPoke=()=>{
        setIsUserClick(true)
    }

    return(
            <>
            {pokeData.map((pokemon) => 
            // console.log(pokemon);
            (
                <div onClick= {()=>{IsUserClickPoke() , setChosenPoke(pokemon.url)}}
                className="poke"
                key={`idIs${pokemon.name}`}>
                    <h2>{pokemon.name}</h2>        
                    <img src={pokemon.sprites} alt="קגק3'" />            
                </div>
            ))}
            </>
        )
}

export default Poke