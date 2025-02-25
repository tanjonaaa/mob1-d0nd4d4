import { PokemonClient } from 'pokenode-ts';

const api = new PokemonClient();

export const getPokemonByName = async (name: string) => {
  try {
    const pokemon = await api.getPokemonByName(name);
    return pokemon;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
};
