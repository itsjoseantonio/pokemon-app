import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AuthState } from '@/types';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setSession: (user, token) => {
        set({ user });
      },
    }),
    {
      name: 'auth',
    }
  )
);
