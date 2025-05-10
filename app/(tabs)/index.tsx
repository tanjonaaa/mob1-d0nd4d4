import React from 'react';
import {ActivityIndicator, FlatList, StatusBar, StyleSheet} from 'react-native';
import {useRouter} from 'expo-router';
import PokemonCard from '../../components/PokemonCard';
import usePaginatedPokemonList from "@/hooks/usePaginatedPokemonList";

const HomeScreen = () => {
    const router = useRouter();
    const {pokemons, loading, fetchPokemons} = usePaginatedPokemonList(0)

    const handlePokemonPress = (pokemonName: string) => {
        router.push(`/(pokemon)/detail?pokemonName=${pokemonName}`);
    };

    return (
        <FlatList
            style={styles.container}
            data={pokemons}
            keyExtractor={item => item.name}
            onEndReached={fetchPokemons}
            onEndReachedThreshold={0.5}
            ListFooterComponent={loading ? <ActivityIndicator/> : null}
            renderItem={({item}) => <PokemonCard pokemon={item} onPress={() => handlePokemonPress(item.name)}/>}/>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }
});

export default HomeScreen;
