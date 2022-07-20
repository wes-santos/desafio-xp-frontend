/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TableContainer from './style';
import '../table/style.css';
import * as C from '../table/style';

export default function TradingTable({
  Image, CodAtivo, Subtitle, Valor,
}) {
  const { myAssets } = useSelector((state) => state.user);
  const [userAssetQty, setUserAssetQty] = useState(0);

  useEffect(() => {
    myAssets.forEach((e) => {
      if (e.codAtivo === CodAtivo) {
        setUserAssetQty(e.qtdeAtivo);
      }
    });
  }, [myAssets]);

  return (
    <TableContainer>
      <C.Table>
        <tbody>
          <tr>
            <td>
              <C.AssetContainer>
                <div>
                  {Image && <img src={Image} alt={CodAtivo} />}
                </div>
                <div>
                  <p><strong>{CodAtivo}</strong></p>
                  <p className="asset-subtitle">{Subtitle && `-| ${Subtitle}`}</p>
                </div>
              </C.AssetContainer>
            </td>
            <td>
              <C.PriceContainer>
                <p className="green">{userAssetQty}</p>
                <p>{`R$ ${Valor.toString().replace('.', ',')}`}</p>
              </C.PriceContainer>
            </td>
          </tr>
        </tbody>
      </C.Table>
    </TableContainer>
  );
}
