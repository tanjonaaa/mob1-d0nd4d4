import {useEffect, useState} from "react";
import {Pokemon} from "pokenode-ts";
import {getPokemonList} from "@/lib/api/pokemonClient";

const usePaginatedPokemonList = (defaultOffset: number) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [offset, setOffset] = useState(defaultOffset);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchPokemons = async () => {
        if (loading || !hasMore) return;
        setLoading(true);

        try {
            const data = await getPokemonList(offset, 20);
            if (data.length > 0) {
                setPokemons(prev => [...prev, ...data]);
                setOffset(prev => prev + 20);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching Pokémon:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemons();
    }, [offset]);

    return { pokemons , loading, fetchPokemons }
}

export default usePaginatedPokemonList;