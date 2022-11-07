import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface CardPokemonProps {
  name: string;
  type: string;
  url: string;
}

export default function CardPokemon(props: CardPokemonProps) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" image={props.url} alt="green iguana" />
      <CardContent>
        <Typography
          display="flex"
          justifyContent="center"
          gutterBottom
          variant="h5"
          component="div"
        >
          {props.name}
        </Typography>
        <Typography
          display="flex"
          justifyContent="center"
          gutterBottom
          variant="h5"
          component="div"
        >
          {props.type}
        </Typography>
      </CardContent>
    </Card>
  );
}
