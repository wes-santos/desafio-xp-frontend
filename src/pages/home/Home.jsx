import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faDollarSign,
  faTentArrowTurnLeft,
  faMoneyBillTransfer,
} from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/header/Header';
import ShortcutCard from '../../components/ShortcutCard/ShortcutCard';
import * as C from './style';

export default function Home() {
  return (
    <C.Container>
      {Header()}
      <h2>Seja bem-vindo(a)!</h2>
      <C.WelcomeText>
        Que tal escolher um atalho logo abaixo para começar a usar o aplicativo?
      </C.WelcomeText>
      <C.CardsContainer>
        <Link to="/home">
          {ShortcutCard('Página inicial', true, <FontAwesomeIcon icon={faHouse} />)}
        </Link>

        <Link to="/investimentos/acoes">
          {ShortcutCard('Ações', false, <FontAwesomeIcon icon={faDollarSign} />)}
        </Link>

        <Link to="/conta">
          {ShortcutCard('Depósito', false, <FontAwesomeIcon icon={faMoneyBillTransfer} />)}
        </Link>

        <Link to="/">
          {ShortcutCard('Sair', false, <FontAwesomeIcon icon={faTentArrowTurnLeft} />)}
        </Link>
      </C.CardsContainer>
    </C.Container>
  );
}
