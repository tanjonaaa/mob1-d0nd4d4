import React from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView, useWindowDimensions, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import usePokemon from '../../hooks/usePokemon';
import { typeColors } from '../../components/pokemon/types';
import { AboutTab, StatsTab, MovesTab, EvolutionTab } from '../../components/pokemon';
import styles from './styles';

const PokemonDetail = () => {
  const { pokemonName } = useLocalSearchParams<{ pokemonName: string }>();
  const { pokemon, loading } = usePokemon(pokemonName);
  const [activeTab, setActiveTab] = useState<'about' | 'stats' | 'evolution' | 'moves'>('about');
  const { width, height } = useWindowDimensions();

  if (loading) return <ActivityIndicator />;

  const mainType = pokemon?.types[0]?.type.name || 'normal';
  const mainColor = typeColors[mainType as keyof typeof typeColors];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutTab pokemon={pokemon} />;
      case 'stats':
        return <StatsTab pokemon={pokemon} mainColor={mainColor} />;
      case 'moves':
        return <MovesTab pokemon={pokemon} />;
      case 'evolution':
        return <EvolutionTab pokemon={pokemon} />;
    }
  };

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: mainColor }]}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.header}>
        <Text style={styles.name}>{pokemon?.name}</Text>
        <Text style={styles.number}>#{String(pokemon?.id).padStart(3, '0')}</Text>
        <View style={styles.typeContainer}>
          {pokemon?.types.map(type => (
            <View key={type.type.name} style={styles.typeTag}>
              <Text style={styles.typeText}>{type.type.name}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={[styles.contentContainer, { minHeight: height * 0.7 }]}>
        <View style={styles.imageWrapper}>
          {pokemon?.sprites?.other?.['official-artwork']?.front_default && (
            <Image 
              source={{ uri: pokemon.sprites.other['official-artwork'].front_default }}
              style={styles.image}
            />
          )}
        </View>

        <View style={styles.detailsCard}>
          <View style={styles.tabs}>
            {(['about', 'stats', 'evolution', 'moves'] as const).map((tab) => (
              <Text
                key={tab}
                style={[styles.tab, activeTab === tab && styles.activeTab]}
                onPress={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            ))}
          </View>

          {renderTabContent()}
        </View>
      </View>
    </ScrollView>
  );
};



export default PokemonDetail; 