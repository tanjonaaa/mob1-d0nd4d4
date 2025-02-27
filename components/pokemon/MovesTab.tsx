import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { Pokemon } from './types';

interface Props {
  pokemon: Pokemon | null;
}

export const MovesTab = ({ pokemon }: Props) => {
  if (!pokemon) return null;

  return (
    <View style={styles.container}>
      {pokemon.moves.slice(0, 10).map(move => (
        <View key={move.move.name} style={styles.moveItem}>
          <Text style={styles.moveName}>
            {move.move.name.replace('-', ' ')}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  moveItem: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
  },
  moveName: {
    textTransform: 'capitalize',
    fontSize: 14,
  },
}); 