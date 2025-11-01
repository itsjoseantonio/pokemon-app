export interface User {
  username: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  setSession: (user: User) => void;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  id: number | string;
  name: string;
  image: string;
  height?: number;
  weight?: number;
  stats?: PokemonStat[];
  types?: PokemonType[];
}
