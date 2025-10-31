import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import './App.css';
import LoginPage from '@/pages/Login';
import HomePage from '@/pages/Home';
import { useAuth } from './store/auth';

function App() {
  const { user } = useAuth();

  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={user ? <Navigate to='/home' /> : <LoginPage />}
          ></Route>
          <Route
            path='/home'
            element={user ? <HomePage /> : <Navigate to='/' />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
