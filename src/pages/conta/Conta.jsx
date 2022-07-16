import React from 'react';
import { Link } from 'react-router-dom';
import * as C from './style';
import Header from '../../components/header/Header';

export default function Conta() {
  return (
    <C.Section>
      {Header()}
      <C.SaldoContainer>
        <h2>Saldo em conta: </h2>
        <p>R$999,99</p>
      </C.SaldoContainer>
      <C.MainContainer>
        <C.ButtonsContainer>
          <C.PrimaryButton type="button" autofocus="true">
            Depósito
          </C.PrimaryButton>
          <C.PrimaryButton type="button">
            Retirada
          </C.PrimaryButton>
        </C.ButtonsContainer>
        <input type="text" placeholder="Informe o Valor" />
      </C.MainContainer>
      <C.ButtonsContainer>
        <Link to="/investimentos">
          <C.SecondaryButton type="button">
            Voltar
          </C.SecondaryButton>
        </Link>
        <C.SecondaryButton type="button">
          Confirmar
        </C.SecondaryButton>
      </C.ButtonsContainer>
    </C.Section>
  );
}
