import { create } from 'zustand';
import type { AuthState } from '@/types';

export const useAuth = create<AuthState>((set) => ({
  user: null,
  setSession: (user) => {
    set({ user });
  },
}));
