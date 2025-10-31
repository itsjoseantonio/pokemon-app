import LoginForm from '@/components/LoginForm';
import useLogin from '@/hooks/useLogin';

const LoginPage = () => {
  const { handleLogin, error } = useLogin();

  return (
    <>
      <LoginForm onSubmit={handleLogin} error={error} />
    </>
  );
};

export default LoginPage;
