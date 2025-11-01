import { useState, useEffect } from 'react';
import { fetchPokemons } from '@/services/pokemonService';
import type { Pokemon } from '@/types';

const usePokemonData = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getPokemonData = async () => {
    setError(null);

    try {
      setLoading(true);
      const { data: PokemonsData } = await fetchPokemons();
      setPokemonList(PokemonsData.results);
    } catch (err) {
      console.error(err);
      setError('Failed to load Pokémon data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  return { pokemonList, error, loading };
};

export default usePokemonData;
