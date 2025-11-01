import { useState, useMemo } from 'react';
import type { Pokemon } from '@/types';

interface UseFilterPokemonProps {
  pokemonList: Pokemon[] | null;
}

const useFilterPokemon = ({ pokemonList }: UseFilterPokemonProps) => {
  const [search, setSearch] = useState<string>('');
  const [sortBy, setSortBy] = useState<'number' | 'name'>('number');

  const filteredPokemon = useMemo(() => {
    if (!pokemonList) return [];

    const filtered = pokemonList?.filter((p) => {
      if (sortBy === 'name') {
        return p.name.toLowerCase().includes(search.toLowerCase());
      }
      return String(p.id).toLowerCase().includes(search.toLowerCase());
    });

    return filtered;
  }, [search, sortBy, pokemonList]);

  return { search, setSearch, sortBy, setSortBy, filteredPokemon };
};

export default useFilterPokemon;
