/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TableContainer from './style';
import '../Table/style.css';
import * as C from '../Table/style';

export default function TradingTable({
  Image, CodAtivo, Subtitle, Valor,
}) {
  const { userAssets } = useSelector((state) => state.user);
  const [userAssetQty, setUserAssetQty] = useState(0);

  useEffect(() => {
    userAssets.forEach((e) => {
      if (e.CodAtivo === CodAtivo) {
        setUserAssetQty(e.QtdeAtivo);
      }
    });
  }, [userAssets]);

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
