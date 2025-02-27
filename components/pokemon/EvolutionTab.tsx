import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import type { Pokemon } from './types';

interface Props {
  pokemon: Pokemon | null;
}

interface Evolution {
  name: string;
  sprite: string;
  level?: number;
}

export const EvolutionTab = ({ pokemon }: Props) => {
  if (!pokemon) return null;

  const [evolutions, setEvolutions] = React.useState<Evolution[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchEvolutions = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(pokemon.species.url);
        const speciesData = await response.json();
        
        const evoChainResponse = await fetch(speciesData.evolution_chain.url);
        const evoChainData = await evoChainResponse.json();
        
        const evolutionList: Evolution[] = [];
        let currentEvo = evoChainData.chain;

        while (currentEvo) {
          const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentEvo.species.name}`);
          const pokemonData = await pokemonResponse.json();
          
          evolutionList.push({
            name: currentEvo.species.name,
            sprite: pokemonData.sprites.front_default,
            level: currentEvo.evolution_details[0]?.min_level
          });

          currentEvo = currentEvo.evolves_to[0];
        }

        setEvolutions(evolutionList);
      } catch (error) {
        console.error('Erreur lors de la récupération des évolutions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvolutions();
  }, [pokemon]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Chargement des évolutions...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.evolutionChain}>
        {evolutions.map((evolution, index) => (
          <React.Fragment key={evolution.name}>
            {index > 0 && <Text style={styles.arrow}>→</Text>}
            <View style={styles.evolutionItem}>
              <Image 
                source={{ uri: evolution.sprite }} 
                style={styles.sprite} 
              />
              <Text style={styles.name}>{evolution.name}</Text>
              {evolution.level && (
                <Text style={styles.level}>Niveau {evolution.level}</Text>
              )}
            </View>
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  evolutionChain: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  evolutionItem: {
    alignItems: 'center',
    margin: 10,
  },
  sprite: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 16,
    color: '#333',
    textTransform: 'capitalize',
  },
  level: {
    fontSize: 14,
    color: '#666',
  },
  arrow: {
    fontSize: 24,
    color: '#666',
    marginHorizontal: 10,
  },
  loading: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
}); 