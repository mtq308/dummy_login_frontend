import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Gym from './pages/Gym';
import Food from './pages/Food';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={isLoggedIn ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route path="/gym" element={<Gym />} />
        <Route path="/food" element={<Food />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>

    </Router>
  );
}

export default App;
