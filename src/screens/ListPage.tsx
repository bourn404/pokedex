import React from 'react';
import { createUseStyles } from 'react-jss';
import { useParams } from 'react-router-dom';
import { PokemonList } from '../components';
import { PokemonDialog } from '../components/PokemonList/PokemonDialog';
import breakpoints from '../theme/breakpoints';

export const ListPage = () => {
  const classes = useStyles();
  const { pokeName } = useParams();

  return (
    <div className={classes.root}>
      <h1>Pokedex</h1>
      <PokemonList />
      <PokemonDialog name={pokeName} />
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      maxWidth: '100%',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      padding: '16px',
      [breakpoints.tablet]: {
        padding: '64px',
      },
      [breakpoints.computer]: {
        padding: '64px 120px',
      }
    },
  },
  { name: 'ListPage' }
);
