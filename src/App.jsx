import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/investimentos/Home';

function App() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={Login()}
        />
        <Route
          path="/investimentos"
          element={Home()}
        />
      </Routes>
    </main>
  );
}

export default App;
