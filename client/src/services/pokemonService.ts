import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: { 'Content-Type': 'application/json' },
});

export const fetchPokemons = async () => {
  const response = await api.get('/pokemons');
  return response.data;
};

export const getPokemonById = async (id: string) => {
  const response = await api.get(`/pokemon/${id}`);
  return response.data;
};
