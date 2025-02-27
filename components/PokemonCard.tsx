import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet, Image} from 'react-native';
import usePokemon from '../hooks/usePokemon';
import {Pokemon} from "pokenode-ts";
import {typeColors} from "@/components/pokemon";

const PokemonCard = ({pokemon, onPress}: { pokemon: Pokemon, onPress: () => void }) => {

    const mainType = pokemon.types[0].type.name || 'normal';
    const mainColor = typeColors[mainType as keyof typeof typeColors];
    const imageUrl = pokemon.sprites.front_default;

    return (
        <View style={[styles.card, {backgroundColor: mainColor}]} onTouchEnd={onPress}>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{pokemon.name}</Text>
                <Text style={styles.id}>#{pokemon.id}</Text>
            </View>
            {imageUrl && (
                <Image source={{uri: imageUrl}} style={styles.image}/>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        margin: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 3,
        marginBottom: 16,
    },
    textContainer: {
        flex: 1,
        marginRight: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        textTransform: 'capitalize',
        color: '#fff',
    },
    id: {
        color: '#efefef',
    },
    image: {
        width: 100,
        height: 100,
    },
});

export default PokemonCard;
