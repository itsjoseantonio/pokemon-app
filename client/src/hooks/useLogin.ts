import { useState } from 'react';
import { useNavigate } from 'react-router';
import { login } from '@/services/authService';
import { useAuthStore } from '@/store/authStore';

const useLogin = () => {
  const navigate = useNavigate();
  const setSession = useAuthStore((state) => state.setSession);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleLogin = async (username: string, password: string) => {
    setError(null);

    try {
      setLoading(true);
      const userData = await login(username, password);
      setSession(userData.user, userData.token);
      navigate('/pokemons');
    } catch (error) {
      setError('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, error, loading };
};

export default useLogin;
