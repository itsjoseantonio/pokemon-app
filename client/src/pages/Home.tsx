import { useAuth } from '@/store/auth';

const HomePage = () => {
  const { user } = useAuth();

  return <div>Hi, {user?.username}</div>;
};

export default HomePage;
