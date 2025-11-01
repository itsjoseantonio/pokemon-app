import { useState, useEffect } from 'react';
import { fetchPokemons } from '@/services/pokemonService';
import type { Pokemon } from '@/types';

const pokemons = [
  { id: '#001', name: 'Bulbasaur', image: '/assets/bulbasaur.png' },
  { id: '#004', name: 'Charmander', image: '/assets/charmander.png' },
  { id: '#007', name: 'Squirtle', image: '/assets/squirtle.png' },
  { id: '#012', name: 'Butterfree', image: '/assets/butterfree.png' },
  { id: '#025', name: 'Pikachu', image: '/assets/pikachu.png' },
  { id: '#092', name: 'Gastly', image: '/assets/gastly.png' },
  { id: '#132', name: 'Ditto', image: '/assets/ditto.png' },
  { id: '#152', name: 'Mew', image: '/assets/mew.png' },
  { id: '#304', name: 'Aron', image: '/assets/aron.png' },
];

const usePokemonData = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[] | null>(null);

  const getPokemonData = async () => {
    try {
      const { data } = await fetchPokemons();
      console.log(data, 'pokemons');
      setPokemonList(data.results);
    } catch (error) {
      console.log(error, 'error');
    }
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return { pokemonList };
};

export default usePokemonData;
