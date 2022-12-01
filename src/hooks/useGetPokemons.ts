import { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { BasicPokemon, PokemonOption } from '../types/pokemon';

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      number
      types
      image
    }
  }
`;

export const useGetPokemons = () => {
  const { data, ...queryRes } = useQuery(GET_POKEMONS, {
    variables: {
      first: 151, // Keep hard coded
    },
  });

  const pokemons: BasicPokemon[] = useMemo(
    () =>
      data?.pokemons.map((pokemon: BasicPokemon) => ({
        ...pokemon,
        image: pokemon.image
          .replace('artwork', 'sprites/home/normal')
          .replace('jpg', 'png'),
      })) || [],
    [data]
  );

  const pokemonOptions: PokemonOption[] = useMemo(
    () => pokemons.map((p: BasicPokemon) => ({ value: p.id, label: p.name })),
    [pokemons]
  );

  return {
    pokemons,
    pokemonOptions,
    ...queryRes,
  };
};
