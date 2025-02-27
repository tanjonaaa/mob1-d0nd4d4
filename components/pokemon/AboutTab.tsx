import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { Pokemon } from './types';

interface Props {
  pokemon: Pokemon | null;
}

export const AboutTab = ({ pokemon }: Props) => {
  if (!pokemon) return null;

  return (
    <View style={styles.container}>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Species</Text>
        <Text style={styles.infoValue}>{pokemon.species.name}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Height</Text>
        <Text style={styles.infoValue}>{pokemon.height / 10} m</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Weight</Text>
        <Text style={styles.infoValue}>{pokemon.weight / 10} kg</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.infoLabel}>Abilities</Text>
        <Text style={styles.infoValue}>
          {pokemon.abilities.map(a => a.ability.name).join(', ')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    color: '#666',
    fontSize: 16,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
}); 