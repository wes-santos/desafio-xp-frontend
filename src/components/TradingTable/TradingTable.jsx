/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import TableContainer from './style';
import '../Table/style.css';
import * as C from '../Table/style';

export default function TradingTable({
  imagem, codAtivo, subtitulo, valor,
}) {
  const { userAssets, isFetching } = useSelector((state) => state.user);
  const actualAsset = userAssets.find((asset) => asset.codAtivo === codAtivo);

  const getQuantity = () => {
    if (actualAsset) {
      return actualAsset.qtdeAtivo;
    }

    return 0;
  };

  return (
    isFetching ? <h1>Carregando...</h1> : (
      <TableContainer>
        <C.Table>
          <tbody>
            <tr>
              <td>
                <C.AssetContainer>
                  <div>
                    {imagem && <img src={imagem} alt={codAtivo} />}
                  </div>
                  <div>
                    <p><strong>{codAtivo}</strong></p>
                    <p className="asset-subtitle">{subtitulo && `-| ${subtitulo}`}</p>
                  </div>
                </C.AssetContainer>
              </td>
              <td>
                <C.PriceContainer>
                  <p className="green" data-testid="asset-quantity">{getQuantity()}</p>
                  <p data-testid="asset-price">{`R$ ${valor ? valor.toString().replace('.', ',') : 0}`}</p>
                </C.PriceContainer>
              </td>
            </tr>
          </tbody>
        </C.Table>
      </TableContainer>
    )
  );
}
