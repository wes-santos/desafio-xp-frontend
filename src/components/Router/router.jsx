import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import Home from '../../pages/Home/Home';
import Negociar from '../../pages/Negociar/Negociar';
import Conta from '../../pages/Conta/Conta';
import Acoes from '../../pages/Investimentos/Acoes/Acoes';

export default function Router() {
  return (
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
  );
}
