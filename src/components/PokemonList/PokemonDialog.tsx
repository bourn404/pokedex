import React from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemon } from '../../hooks/useGetPokemon';
import { Dialog, DialogContent } from '@mui/material';
import { useNavigate } from "react-router-dom";
import typeColors from '../../theme/type-colors';


interface PokemonDialogProps {
  name?: string;
}

export const PokemonDialog = ({ name }: PokemonDialogProps) => {
  if (!name) {
    return null
  }
  const classes = useStyles();
  const { pokemon, loading } = useGetPokemon(name);
  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/pokemon')
  }
  return !!pokemon && pokemon.types ? (
    <Dialog open={true} onClose={handleClose}>
      <DialogContent className={classes.dialogContent} style={{ padding: 0, width: '500px', maxWidth: '100%' }}>
        <div className={`${classes.colorWrapper} ${classes[pokemon.types[0]]}`}>
          <h2 className={classes.pokeName}>{pokemon.name}</h2>
          <ul className={classes.pokeTypes}>
            {pokemon.types.map((type) => (
              <li key={type} className={classes.pokeType}>{type}</li>
            ))}
          </ul>
          <span>#{pokemon.number}</span>
          <img className={classes.pokeImage} src={pokemon.image} />
        </div>
        <div className={classes.statsWrapper}>
          <table>
            <tr>
              <th>Classification</th><td>{pokemon.classification}</td>
            </tr>
            <tr>
              <th>Height</th><td>{pokemon.height.minimum} - {pokemon.height.maximum}</td>
            </tr>
            <tr>
              <th>Weight</th><td>{pokemon.weight.minimum} - {pokemon.weight.maximum}</td>
            </tr>
            <tr>
              <th>Resistances</th><td>{pokemon.resistant.join(', ')}</td>
            </tr>
            <tr>
              <th>Weaknesses</th><td>{pokemon.weaknesses.join(', ')}</td>
            </tr>
            <tr>
              <th>Flee Rate</th><td>{pokemon.fleeRate}</td>
            </tr>
            <tr>
              <th>Combat Power</th><td>{pokemon.maxCP}</td>
            </tr>
            <tr>
              <th>Hit Points</th><td>{pokemon.maxHP}</td>
            </tr>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  ) : null;
};

const useStyles = createUseStyles(
  {
    dialogContent: {
      background: '#171E2B',
    },
    colorWrapper: {
      padding: '24px 32px 64px',
    },
    statsWrapper: {
      padding: '120px 32px 64px',
      background: '#ffffff',
      marginTop: '-48px',
      borderTopLeftRadius: '48px',
      borderTopRightRadius: '48px',
      '& *': {
        color: '#000000'
      },
      '& th, & td': {
        textAlign: 'left',
        padding: '4px 24px 8px 0'
      }
    },
    pokeNum: {
      zIndex: '50',
      fontSize: '16px',
      paddingLeft: '16px',
    },
    pokeName: {
      zIndex: '50',
      margin: '0',
      textShadow: '3px 3px 3px rgba(0,0,0,0.4)',
      fontSize: '48px',
    },
    pokeTypes: {
      zIndex: '50',
      gridArea: 'types',
      listStyle: 'none',
      padding: '0',
      display: 'flex',
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
    pokeImage: {
      display: 'block',
      width: '65%',
      margin: '-12% auto -20%',
    },
    ...typeColors
  },
  { name: 'PokemonDialog' }
);
