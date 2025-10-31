import { create } from 'zustand';

export const usePokemonStore = create((set) => ({
  pokemons: null,
  setPokemons: (pokemons: any) => {
    set(pokemons);
  },
}));
