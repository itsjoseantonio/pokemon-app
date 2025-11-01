import { useState, useEffect } from 'react';
import { getPokemonById } from '@/services/pokemonService';

const usePokemonById = (id: string) => {
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemon = async () => {
    setError(null);
    try {
      setLoading(true);
      const { data: PokemonData } = await getPokemonById(id);
      setPokemonData(PokemonData);
    } catch (error) {
      console.error(error);
      setError('Failed to load Pokémon data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { pokemonData, loading, error };
};

export default usePokemonById;
