import React from 'react';
import { Link } from 'react-router-dom';
import * as C from './style';
import './style.css';
import xpLogo from './xp_logo_home.png';

export default function Login() {
  return (
    <C.Form>
      <img src={xpLogo} alt="logo xp" />
      <C.Label htmlFor="emailInput">
        <p>E-mail</p>
        <input id="emailInput" type="text" />
      </C.Label>
      <C.Label htmlFor="passwordInput">
        <p>Senha</p>
        <input id="passwordInput" type="password" />
      </C.Label>
      <Link to="/investimentos">
        <C.Button type="button">Acessar</C.Button>
      </Link>
    </C.Form>
  );
}
