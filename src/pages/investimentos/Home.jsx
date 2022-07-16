import React from 'react';
import { Link } from 'react-router-dom';
import * as C from './style';
import Header from '../../components/header/Header';
import './style.css';

export default function Home() {
  return (
    <C.Wrapper>
      {Header()}
      <C.Container>
        <div>
          <section>
            <h2>Minhas ações</h2>
            <table>
              <colgroup>
                <col style={{ backgroundColor: 'yellow' }} />
                <col className="grey" />
                <col className="black" />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Qtde</th>
                  <th>Valor (R$)</th>
                  <th>Negociar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AZUL4</td>
                  <td className="white-color">100</td>
                  <td className="white-color">350,00</td>
                  <td><Link to="/negociar">C/V</Link></td>
                </tr>
                <tr>
                  <td>PETR4</td>
                  <td className="white-color">100</td>
                  <td className="white-color">350,00</td>
                  <td><Link to="/negociar">C/V</Link></td>
                </tr>
                <tr>
                  <td>VALE4</td>
                  <td className="white-color">100</td>
                  <td className="white-color">350,00</td>
                  <td><Link to="/negociar">C/V</Link></td>
                </tr>
              </tbody>
            </table>
          </section>
          <section>
            <h2>Disponíveis para investir</h2>
            <table>
              <colgroup>
                <col style={{ backgroundColor: 'yellow' }} />
                <col className="grey" />
                <col className="black" />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th>Ação</th>
                  <th>Qtde</th>
                  <th>Valor (R$)</th>
                  <th>Negociar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>XPTO</td>
                  <td className="white-color">1</td>
                  <td className="white-color">350,00</td>
                  <td><Link to="/negociar">C/V</Link></td>
                </tr>
                <tr>
                  <td>XPTO</td>
                  <td className="white-color">1</td>
                  <td className="white-color">350,00</td>
                  <td><Link to="/negociar">C/V</Link></td>
                </tr>
                <tr>
                  <td>XPTO</td>
                  <td className="white-color">1</td>
                  <td className="white-color">350,00</td>
                  <td><Link to="/negociar">C/V</Link></td>
                </tr>
                <tr>
                  <td>XPTO</td>
                  <td className="white-color">1</td>
                  <td className="white-color">350,00</td>
                  <td><Link to="/negociar">C/V</Link></td>
                </tr>
                <tr>
                  <td>XPTO</td>
                  <td className="white-color">1</td>
                  <td className="white-color">350,00</td>
                  <td><Link to="/negociar">C/V</Link></td>
                </tr>
                <tr>
                  <td>XPTO</td>
                  <td className="white-color">1</td>
                  <td className="white-color">350,00</td>
                  <td><Link to="/negociar">C/V</Link></td>
                </tr>
                <tr>
                  <td>XPTO</td>
                  <td className="white-color">1</td>
                  <td className="white-color">350,00</td>
                  <td><Link to="/negociar">C/V</Link></td>
                </tr>
                <tr>
                  <td>XPTO</td>
                  <td className="white-color">1</td>
                  <td className="white-color">350,00</td>
                  <td><Link to="/negociar">C/V</Link></td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        <Link to="/conta">
          <C.Button
            type="button"
          >
            Depósito / Retirada
          </C.Button>
        </Link>
      </C.Container>
    </C.Wrapper>
  );
}
