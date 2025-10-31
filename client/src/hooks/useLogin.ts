import { useState } from 'react';
import { useNavigate } from 'react-router';
import { login } from '@/services/authService';
import { useAuth } from '@/store/auth';

const useLogin = () => {
  const navigate = useNavigate();
  const setSession = useAuth((state) => state.setSession);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (username: string, password: string) => {
    setError(null);

    try {
      const data = await login(username, password);
      console.log(data, 'data');
      setSession(data.user);
      navigate('/home');
    } catch (error) {
      setError('Invalid credentials');
      console.log(error, 'error');
    }
  };

  return { handleLogin, error };
};

export default useLogin;
