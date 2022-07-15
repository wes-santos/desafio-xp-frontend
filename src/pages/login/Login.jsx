import React from 'react';
import { Link } from 'react-router-dom';
import * as C from './style';
import './style.css';

export default function Login() {
  return (
    <C.Form>
      <C.Input type="text" placeholder="E-mail" />
      <C.Input type="password" placeholder="Senha" />
      <Link to="/investimentos">
        <C.Button type="button">Acessar</C.Button>
      </Link>
    </C.Form>
  );
}
