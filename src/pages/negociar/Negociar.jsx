import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import '../investimentos/style.css';
import * as C from './style';

export default function Negociar() {
  return (
    <C.Section>
      {Header()}
      <C.PageWrapper>
        <C.MainContainer>
          <C.Title>Comprar/Vender Ação</C.Title>
          <C.TableContainer>
            <table>
              <colgroup>
                <col style={{ backgroundColor: 'yellow' }} />
                <col className="grey" />
                <col className="black" />
              </colgroup>
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Qtde</th>
                  <th>Valor (R$)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AZUL4</td>
                  <td className="white-color">100</td>
                  <td className="white-color">350,00</td>
                </tr>
              </tbody>
            </table>
          </C.TableContainer>

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
          <Link to="/investimentos">
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
