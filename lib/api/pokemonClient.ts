import {PokemonClient} from 'pokenode-ts';

const api = new PokemonClient();

export const getPokemonByName = async (name: string) => {
  try {
    return await api.getPokemonByName(name);
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
};

export const getPokemonList = async (offset: number, limit: number) => {
  try {
    const response = await api.listPokemons(offset, limit);
    const results = response.results;

    const pokemons = results.map(async (result) => {
      return await api.getPokemonByName(result.name);
    });

    return await Promise.all(pokemons);
  } catch (error) {
    console.error('Error fetching pokemons list:', error);
    throw error;
  }
}

