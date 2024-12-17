import axios from "axios";
import { error } from "console";
import exp from "constants";
import { useEffect, useState } from "react";

const PokeBall=()=>{
    const [pokemons, setPokemons] = useState([])
    const fetchData = async ()=>{
        try{
            const {data:{results}}= await axios.get("https://pokeapi.co/api/v2/pokemon/");
            setPokemons(results)
            console.log(results);
        }
        catch{
            console.error(error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return 
        <div>
            <UL>
                {pokemons.map{pokemon=>{
                    return <li key={`pokemon-${index}`}></li>
                }}}
            </UL>
        </div>
}

export default PokeBall