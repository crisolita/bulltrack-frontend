import { useState, useEffect } from 'react';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';

export interface Bull {
  id: number;
  rank: number;
  name: string;
  breed: string;
  age: string;
  image: string;
  score: number;
  performance: string;
  badges: string[];
  isFavorite: boolean;
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check localStorage for authentication state on mount
  useEffect(() => {
    const authState = localStorage.getItem('isAuthenticated');
    if (authState === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <>
      {isAuthenticated ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}
