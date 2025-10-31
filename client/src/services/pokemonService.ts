import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
});

export const fetchPokemons = async () => {
  const response = await api.get('/pokemons');
  return response.data;
};
