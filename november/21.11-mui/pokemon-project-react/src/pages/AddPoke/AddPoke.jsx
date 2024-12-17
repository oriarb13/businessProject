import { useState } from "react";
import { TextField, Button, Card, CardContent, Grid2 } from '@mui/material';
import { addFavorite } from "../../utils/favoritehandle.jsx";

const AddPoke = () => {
  const [name, setName] = useState('');
  const [ability, setAbility] = useState('');
  const [type, setType] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [hp, setHp] = useState('');
  const [attack, setAttack] = useState('');
  const [defense, setDefense] = useState('');
  const [specialAttack, setSpecialAttack] = useState('');
  const [specialDefense, setSpecialDefense] = useState('');
  const [speed, setSpeed] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPokemon = {
      name,
      types: [
        { type: { name: type } }
      ],
      abilities: [
        { ability: { name: ability } }
      ],
      height,
      weight,
      stats: [
        { base_stat: hp },
        { base_stat: attack },
        { base_stat: defense },
        { base_stat: specialAttack },
        { base_stat: specialDefense },
        { base_stat: speed }
      ],
      sprites: {
        front_default: image,
      }
    };

    // Add to favorites
    addFavorite(newPokemon);

    // Clear all fields
    setName('');
    setAbility('');
    setType('');
    setHeight('');
    setWeight('');
    setHp('');
    setAttack('');
    setDefense('');
    setSpecialAttack('');
    setSpecialDefense('');
    setSpeed('');
    setImage(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>add a new pokemon</h1>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid2 container spacing={2} direction="column">
              <Grid2 item>
                <TextField
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  required
                />
              </Grid2>
              <Grid2 item>
                <TextField
                  label="Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  fullWidth
                  required
                />
              </Grid2>
              <Grid2 item>
                <TextField
                  label="Ability"
                  value={ability}
                  onChange={(e) => setAbility(e.target.value)}
                  fullWidth
                  required
                />
              </Grid2>
              <Grid2 item>
                <TextField
                  label="Height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  fullWidth
                  required
                />
              </Grid2>
              <Grid2 item>
                <TextField
                  label="Weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  fullWidth
                  required
                />
              </Grid2>
              <Grid2 item>
                <TextField
                  label="HP"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  fullWidth
                  required
                />
              </Grid2>
              <Grid2 item>
                <TextField
                  label="Attack"
                  value={attack}
                  onChange={(e) => setAttack(e.target.value)}
                  fullWidth
                  required
                />
              </Grid2>
              <Grid2 item>
                <TextField
                  label="Defense"
                  value={defense}
                  onChange={(e) => setDefense(e.target.value)}
                  fullWidth
                  required
                />
              </Grid2>
              <Grid2 item>
                <TextField
                  label="Special Attack"
                  value={specialAttack}
                  onChange={(e) => setSpecialAttack(e.target.value)}
                  fullWidth
                  required
                />
              </Grid2>
              <Grid2 item>
                <TextField
                  label="Special Defense"
                  value={specialDefense}
                  onChange={(e) => setSpecialDefense(e.target.value)}
                  fullWidth
                  required
                />
              </Grid2>
              <Grid2 item>
                <TextField
                  label="Speed"
                  value={speed}
                  onChange={(e) => setSpeed(e.target.value)}
                  fullWidth
                  required
                />
              </Grid2>
              <Grid2 item>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ width: '100%' }}
                />
              </Grid2>
              <Grid2 item>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Add Pokémon
                </Button>
              </Grid2>
            </Grid2>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddPoke;
