import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import PokemonCard from '../../components/PokemonCard';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PokemonCard name="pikachu" />
      <PokemonCard name="bulbasaur" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingRight: 20,
    paddingLeft: 20,
    gap: 20
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 42,
    padding: 12,
  },
});

export default HomeScreen;
