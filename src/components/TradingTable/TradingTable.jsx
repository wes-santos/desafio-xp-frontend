/* eslint-disable react/prop-types */
import React from 'react';
import TableContainer from './style';
import '../table/style.css';
import * as C from '../table/style';

export default function TradingTable({ acoes }) {
  return (
    <TableContainer>
      <C.Table>
        <tbody>
          <tr>
            <td>
              <C.AssetContainer>
                <div>
                  {acoes.Image && <img src={acoes.Image} alt={acoes.CodAtivo} />}
                </div>
                <div>
                  <p><strong>{acoes.CodAtivo}</strong></p>
                  <p className="asset-subtitle">{acoes.Subtitle && `-| ${acoes.Subtitle}`}</p>
                </div>
              </C.AssetContainer>
            </td>
            <td>
              <C.PriceContainer>
                <p className="green">0</p>
                <p>{`R$ ${acoes.Valor.toString().replace('.', ',')}`}</p>
              </C.PriceContainer>
            </td>
          </tr>
        </tbody>
      </C.Table>
    </TableContainer>
  );
}
