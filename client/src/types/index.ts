export interface User {
  username: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  setSession: (user: User) => void;
}
