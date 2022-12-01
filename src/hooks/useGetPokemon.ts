import { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Pokemon } from '../types/pokemon';

export const GET_POKEMON = gql`
  query pokemon($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

export const useGetPokemon = (name: string) => {
  const { data, ...queryRes } = useQuery(GET_POKEMON, {
    variables: {
      name,
    },
  });


  const pokemon: Pokemon | undefined = useMemo(
    () =>
      data && data.pokemon
        ? {
            ...data.pokemon,
            image: data.pokemon.image
              .replace(
                'artwork',
                'sprites/home/normal'
              )
              .replace('jpg', 'png'),
          }
        : [],
    [data]
  );

  return {
    pokemon: pokemon,
    ...queryRes,
  };
};
