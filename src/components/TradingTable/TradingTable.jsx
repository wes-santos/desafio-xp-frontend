/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import TableContainer from './style';
import '../Table/style.css';
import * as C from '../Table/style';

export default function TradingTable({
  Image, CodAtivo, Subtitle, Valor,
}) {
  const { userAssets } = useSelector((state) => state.user);
  // const [userAssetQty, setUserAssetQty] = useState(0);

  const getQuantity = () => {
    const actualAsset = userAssets.find((asset) => asset.CodAtivo === CodAtivo);

    if (actualAsset) {
      return actualAsset.QtdeAtivo;
    }

    return 0;
  };

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
                <p className="green">{getQuantity()}</p>
                <p>{`R$ ${Valor.toString().replace('.', ',')}`}</p>
              </C.PriceContainer>
            </td>
          </tr>
        </tbody>
      </C.Table>
    </TableContainer>
  );
}
