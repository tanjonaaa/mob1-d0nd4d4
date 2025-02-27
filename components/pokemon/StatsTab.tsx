import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { Pokemon } from './types';

interface Props {
  pokemon: Pokemon | null;
  mainColor: string;
}

export const StatsTab = ({ pokemon, mainColor }: Props) => {
  if (!pokemon) return null;

  return (
    <View style={styles.container}>
      {pokemon.stats.map(stat => (
        <View key={stat.stat.name} style={styles.statRow}>
          <Text style={styles.statName}>
            {stat.stat.name === 'special-attack' ? 'Sp. Atk' :
             stat.stat.name === 'special-defense' ? 'Sp. Def' :
             stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}
          </Text>
          <Text style={styles.statValue}>{stat.base_stat}</Text>
          <View style={styles.statBarContainer}>
            <View 
              style={[
                styles.statBar, 
                { 
                  width: `${(stat.base_stat / 255) * 100}%`,
                  backgroundColor: mainColor
                }
              ]} 
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 15,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statName: {
    width: 80,
    fontSize: 14,
    color: '#666',
  },
  statValue: {
    width: 30,
    fontSize: 14,
    fontWeight: 'bold',
  },
  statBarContainer: {
    flex: 1,
    height: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 2,
  },
  statBar: {
    height: '100%',
    borderRadius: 2,
  },
}); 