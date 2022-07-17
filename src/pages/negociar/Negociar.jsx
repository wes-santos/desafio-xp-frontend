/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../../components/header/Header';
// import '../investimentos/acoes/style.css';
import * as C from './style';
import TradingTable from '../../components/TradingTable/TradingTable';
import { todasAcoes } from '../../data';

export default function Negociar() {
  const { clickedAsset } = useSelector((state) => state.user);
  const asset = todasAcoes.find((e) => e.CodAtivo === clickedAsset);

  return (
    <C.Section>
      {Header()}
      <C.PageWrapper>
        <C.MainContainer>
          <C.Title>Comprar/Vender Ação</C.Title>

          <TradingTable acoes={asset} />

          <C.sellAndBuyContainer>
            <div>
              <C.Buy type="button">
                Comprar
              </C.Buy>
              <input type="number" placeholder="Informe o Valor" />
            </div>

            <div>
              <C.Sell type="button">
                Vender
              </C.Sell>
              <input type="number" placeholder="Informe o Valor" />
            </div>
          </C.sellAndBuyContainer>
        </C.MainContainer>

        <C.ButtonsContainer>
          <Link to="/investimentos/acoes">
            <C.SecondaryButton type="button">
              Voltar
            </C.SecondaryButton>
          </Link>
          <C.SecondaryButton type="Confirmar">
            Confirmar
          </C.SecondaryButton>
        </C.ButtonsContainer>
      </C.PageWrapper>
    </C.Section>
  );
}
