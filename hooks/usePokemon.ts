import { useState, useEffect } from 'react';
import { getPokemonByName } from '../lib/api/pokemonClient';
import { Pokemon } from 'pokenode-ts';

const usePokemon = (name: string) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await getPokemonByName(name);
        setPokemon(data);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [name]);

  return { pokemon, loading };
};

export default usePokemon;
