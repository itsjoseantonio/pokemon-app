import { useState } from 'react';
import { useNavigate } from 'react-router';
import { login } from '@/services/authService';
import { useAuthStore } from '@/store/authStore';

const useLogin = () => {
  const navigate = useNavigate();
  const setSession = useAuthStore((state) => state.setSession);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (username: string, password: string) => {
    setError(null);

    try {
      const data = await login(username, password);
      setSession(data.user);
      navigate('/home');
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return { handleLogin, error };
};

export default useLogin;
