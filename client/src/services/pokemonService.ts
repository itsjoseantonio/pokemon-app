import { api } from './api';

export const fetchPokemons = async () => {
  const response = await api.get('/pokemons');
  return response.data;
};

export const getPokemonById = async (id: string) => {
  const response = await api.get(`/pokemons/${id}`);
  return response.data;
};
