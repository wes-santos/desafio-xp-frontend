import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Negociar from './pages/negociar/Negociar';
import Conta from './pages/conta/Conta';
import Acoes from './pages/investimentos/acoes/Acoes';

function App() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={Login()}
        />
        <Route
          path="/home"
          element={Home()}
        />
        <Route
          path="/investimentos/acoes"
          element={Acoes()}
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
