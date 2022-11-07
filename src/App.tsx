import { AppBar, Box, Grid, Input, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import CardPokemon from './components/CardPokemon';
import { PokemonDetail } from './PokemonDetail';
import { ListPokemon } from './services/ListPokemon';

function App() {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);

  const getPokemons = () => {
    ListPokemon().then((r) => setPokemons(r.results));
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const PokemonFilter = (name: string) => {
    var filterPokemons = [];

    for (var i in pokemons) {
      if (pokemons[i].name.includes(name)) {
        filterPokemons.push(pokemons[i]);
      }
    }
    if (name === '') {
      getPokemons();
    }
    setPokemons(filterPokemons);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, marginBottom: '20px' }}>
        <AppBar position="static" sx={{ backgroundColor: '#ffc107' }}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                color: 'black',
              }}
            >
              PokeAPI
            </Typography>
            <Typography
              sx={{
                fontSize: '24px',
                color: 'black',
                padding: '5px',
              }}
            >
              Search
            </Typography>
            <Input
              sx={{
                color: 'black',
                backgroundColor: '#ffdd72',
                padding: '5px',
              }}
              onChange={(e) => PokemonFilter(e.target.value)}
            ></Input>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {pokemons.map((pokemon) => (
            <Grid item xs={2}>
              <CardPokemon
                name={pokemon.name}
                url={pokemon.sprites.front_default}
                type={pokemon.types[0].type.name}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
