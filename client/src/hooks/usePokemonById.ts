import { useState, useEffect } from 'react';
import { getPokemonById } from '@/services/pokemonService';

const usePokemonById = (id: string) => {
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemon = async () => {
    try {
      const response = await getPokemonById(id);
      console.log(response, 'response pokemon');
    } catch (error) {
      console.log(error, 'error');
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { pokemonData };
};

export default usePokemonById;
