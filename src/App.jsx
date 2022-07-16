import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/investimentos/Home';
import Negociar from './pages/negociar/Negociar';
import Conta from './pages/conta/Conta';

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
        <Route
          path="/negociar"
          element={Negociar()}
        />
        <Route
          path="/conta"
          element={Conta()}
        />
      </Routes>
    </main>
  );
}

export default App;
