import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { PokemonTile } from '.';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import breakpoints from '../../theme/breakpoints';
import { BasicPokemon } from '../../types/pokemon';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
  const [search, setSearch] = useState("");
  const [pokemonsFiltered, setPokemonsFiltered] = useState<BasicPokemon[]>([]);
  
  useEffect(() => {
    setPokemonsFiltered(pokemons.filter(pokemon => (pokemon.number.includes(search) || pokemon.name.toLowerCase().includes(search.toLowerCase()))));
  }, [search, pokemons]);

  return (
    <>
      <input type="search" className={classes.search} placeholder={'Search by name or number...'} onChange={(e)=>setSearch(e.target.value)} />
      <ul className={classes.list}>
        {loading && <div>Loading...</div>}
        {pokemonsFiltered.map((pkmn) => (
          <PokemonTile key={pkmn.id} id={pkmn.id} name={pkmn.name} number={pkmn.number} types={pkmn.types} image={pkmn.image} />
        ))}
      </ul>
    </>
  );
};

const useStyles = createUseStyles(
  {
    list: {
      display: 'grid',
      maxWidth: '100%',
      paddingLeft: '0',
      paddingTop: '16px',
      gap: '24px',
      gridTemplateColumns: '1fr',
      [breakpoints.mobile]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      [breakpoints.tablet]: {
        gap: '32px',
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
      [breakpoints.computer]: {
        gap: '48px',
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },
    search: {
      background: 'rgba(255,255,255,0.05)',
      width: '300px',
      maxWidth: '100%',
      border: '1px solid #ffffff',
      padding: '8px 16px',
      fontSize: '16px',
      borderRadius: '8px',
    }
  },
  { name: 'PokemonList' }
);
