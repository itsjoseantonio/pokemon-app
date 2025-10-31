import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import './App.css';
import LoginPage from '@/pages/Login';
import PokemonsPage from '@/pages/Pokemons';
import PokemonDetailPage from '@/pages/PokemonDetail';
import { useAuthStore } from '@/store/authStore';

function App() {
  const { user } = useAuthStore();

  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={user ? <Navigate to='/pokemons' /> : <LoginPage />}
          />
          <Route
            path='/pokemons'
            element={user ? <PokemonsPage /> : <Navigate to='/' />}
          />
          <Route
            path='/pokemons/:id'
            element={user ? <PokemonDetailPage /> : <Navigate to='/' />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
