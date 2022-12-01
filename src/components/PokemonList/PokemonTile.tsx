import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import breakpoints from '../../theme/breakpoints';
import typeColors from '../../theme/type-colors';
import { PokeType } from '../../types/pokemon';

export interface PokemonTileProps {
  id: string;
  name: string;
  number: string;
  types: PokeType[];
  image: string;
}

export const PokemonTile = ({ id, number, name, types, image }: PokemonTileProps) => {
  const classes = useStyles();

  return (
    <li className={`${classes.tile} ${classes[types[0]]}`} style={{ backgroundImage: `url('${image}')` }}>
      <Link to={`/pokemon/${name}`} className={classes.link}>
      <h2 className={classes.pokeName}>{name}</h2>
      <ul className={classes.pokeTypes}>
        {types.map((type) => (
          <li key={type} className={classes.pokeType}>{type}</li>
        ))}
      </ul>
      <span>#{number}</span>
      </Link>
    </li>
  );
};

const useStyles = createUseStyles(
  {
    tile: {
      minHeight: '30vh',
      backgroundPosition: '135% 115%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '80%',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '32px',
      transition: 'transform 0.5s',
      '&:hover': {
        transform: 'scale(1.1)',
      }
    },
    link: {
      padding: '24px 0 0 24px',
      textDecoration: 'none',
      display: 'block',
      width: '100%',
      height: '100%',
    },
    pokeNum: {
      fontSize: '16px',
      paddingLeft: '16px',
    },
    pokeName: {
      margin: '0',
      textShadow: '3px 3px 3px rgba(0,0,0,0.4)',
      [breakpoints.computer]: {
        fontSize: '32px',
      }
    },
    pokeTypes: {
      gridArea: 'types',
      listStyle: 'none',
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '8px',
      marginTop: '8px',
      marginBottom: '16px'
    },
    pokeType: {
      fontSize: '20px',
      display: 'inline-block',
      padding: '6px 12px',
      borderRadius: '12px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)'
    },
    ...typeColors
  },
  { name: 'PokemonTile' }
);
