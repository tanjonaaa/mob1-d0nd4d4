import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import usePokemon from '../hooks/usePokemon';

const PokemonCard = ({ name, onPress }: { name: string, onPress: () => void }) => {
  const { pokemon, loading } = usePokemon(name);

  if (loading) return <ActivityIndicator />;

  const imageUrl = pokemon?.sprites?.front_default;

  return (
    <View style={styles.card} onTouchEnd={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{pokemon?.name}</Text>
        <Text>Height: {pokemon?.height}</Text>
        <Text>Weight: {pokemon?.weight}</Text>
      </View>
      {imageUrl && (
        <Image source={{ uri: imageUrl }} style={styles.image} />
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
      backgroundColor: '#f8f8f8',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 2 },
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
    },
    image: {
      width: 80,
      height: 80,
    },
  });

export default PokemonCard;
