import { getPokemon } from "../../utils/GetApi.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress, Grid2, Typography, Card, CardContent, Box, Button } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { isFavoritePoke, addFavorite, removeFavorite } from "../../utils/favoritehandle.jsx";

const CardPage = () => {
  const [URL, setURL] = useState(null);  
  const [isFav, setIsFav] = useState(false);  
  const { pokeName } = useParams();  
  const [direction, setDirection] = useState(true);  

  const typeBackgrounds = {
    fire: 'linear-gradient(135deg, #FF7F00, #FF4F00)', 
    water: 'linear-gradient(135deg, #00BFFF, #1E90FF)',
    grass: 'linear-gradient(135deg, #228B22, #32CD32)', 
    electric: 'linear-gradient(135deg, #FFFF00, #FFD700)',
    dark: 'linear-gradient(135deg, #2F4F4F, #000000)',
    psychic: 'linear-gradient(135deg, #8A2BE2, #9B30FF)',
    bug: 'linear-gradient(135deg, #9ACD32, #6B8E23)',
    fairy: 'linear-gradient(135deg, #FF1493, #FF69B4)',
    default: '#f0f0f0',  
  };

  const getPoke = async () => {
    try {
      const pokemonURL = await getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
      setURL(pokemonURL);  
      setIsFav(isFavoritePoke(pokemonURL));  
    } catch (error) {
      console.log("API request failed, checking favorites...", error);
      const favoritesPoke = JSON.parse(localStorage.getItem("favoritesPoke")) || [];
      const favoritePoke = favoritesPoke.find(poke => poke.name.toLowerCase() === pokeName.toLowerCase());
      if (favoritePoke) {
        setURL(favoritePoke);  
        setIsFav(true);  
      }
    }
  };

  useEffect(() => {
    getPoke();  
  }, [pokeName]);

  if (!URL) {
    return <CircularProgress sx={{ display: 'block', margin: 'auto' }} />;
  }

  const handleImageClick = () => {
    setDirection(!direction);  
  };

  const handleFav = () => {
    if (isFav) {
      removeFavorite(URL);  
    } else {
      addFavorite(URL);  
    }
    setIsFav(!isFav);  
  };

  const renderStats = () => {
    const stats = [
      { label: 'HP', value: URL.stats?.[0]?.base_stat || 0 },
      { label: 'Attack', value: URL.stats?.[1]?.base_stat || 0 },
      { label: 'Defense', value: URL.stats?.[2]?.base_stat || 0 },
      { label: 'Special Attack', value: URL.stats?.[3]?.base_stat || 0 },
      { label: 'Special Defense', value: URL.stats?.[4]?.base_stat || 0 },
      { label: 'Speed', value: URL.stats?.[5]?.base_stat || 0 },
    ];

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {stats.map(stat => (
          <Box key={stat.label} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body1" sx={{ width: '150px' }}>{stat.label}: </Typography>
            <progress value={stat.value} max="100" style={{ width: '100%' }} />
            <Typography variant="body2">{stat.value}</Typography>
          </Box>
        ))}
      </Box>
    );
  };

  const typeClass = URL?.types?.[0]?.type?.name || 'default'; 
  const backgroundStyle = typeBackgrounds[typeClass] || typeBackgrounds.default;

  return (
    <div style={{ background: backgroundStyle, padding: '20px', borderRadius: '8px' }}>
      <Box sx={{ padding: 2 }}>
        <Grid2 container spacing={4}>
          <Grid2 item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card sx={{ maxWidth: 300, boxShadow: 3 }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5" >{URL.name}</Typography>
                <img 
                  src={direction ? URL.sprites?.other?.dream_world?.front_default : URL.sprites?.back_default} 
                  alt={URL.name} 
                  onClick={handleImageClick} 
                  style={{ cursor: 'pointer', width: '200px', height: 'auto', borderRadius: '8px' }}
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ marginTop: 2 }}
                  onClick={handleImageClick}
                >
                  Switch View
                </Button>
                <Box 
                  onClick={handleFav} 
                  sx={{
                    marginTop: 3,
                    cursor: 'pointer',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: isFav ? 'red' : 'grey', 
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: 3
                  }}
                >
                  <FavoriteIcon sx={{ color: '#fff', fontSize: '2rem' }} />
                </Box>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2>
            <Typography variant="h4"  sx={{ marginBottom: 2 }}>
              Types
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, }}>
              {URL.types?.map((type) => (
                <div key={type.type.name} label={type.type.name} color="primary" sx={{ marginBottom: 1 }}></div> 
              ))}
            </Box>

            <Box sx={{ marginTop: 4 }}>
              <Typography variant="h6">Height: {URL.height} ft</Typography>
              <Typography variant="h6">Weight: {URL.weight} lbs</Typography>
            </Box>

            <Box sx={{ marginTop: 4 }}>
              <Typography variant="h5" >Stats</Typography>
              {renderStats()}
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </div>
  );
};

export default CardPage;
