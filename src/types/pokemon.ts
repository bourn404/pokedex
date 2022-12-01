export type PokeType = "Bug" 
  | "Dark" 
  | "Dragon" 
  | "Electric" 
  | "Fairy" 
  | "Fighting" 
  | "Fire" 
  | "Flying" 
  | "Ghost"
  | "Grass"
  | "Ground"
  | "Ice"
  | "Normal"
  | "Poison"
  | "Psychic"
  | "Rock"
  | "Steel"
  | "Water";

  export interface BasicPokemon {
    id: string;
    name: string;
    number: string;
    types: PokeType[];
    image: string;
  };

  export interface SizeMeasurement {
    minimum: string;
    maximum: string;
  }

  export interface Pokemon extends BasicPokemon {
    weight: SizeMeasurement;
    height: SizeMeasurement;
    classification: string;
    resistant: string[];
    weaknesses: string[];
    fleeRate: number;
    maxCP: number;
    maxHP: number;
  }
  
  export type PokemonOption = {
    value: Pokemon['id'];
    label: Pokemon['name'];
  };