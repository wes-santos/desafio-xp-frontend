/* eslint-disable react/prop-types */
import React, { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as C from './style';
import { saveClickedAsset } from '../../redux/actions';
import './style.css';

export default function Table({ acoes }) {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { myAssets } = useSelector((state) => state.user);

  const handleClick = (asset) => {
    dispatch(saveClickedAsset(asset));
    return history('/negociar');
  };

  const updateAssetsQty = (asset) => {
    const actualAsset = myAssets.find((e) => e.codAtivo === asset.CodAtivo);
    if (actualAsset) {
      return actualAsset.qtdeAtivo;
    }
    return 0;
  };

  return (
    <C.Table>
      <tbody>
        {acoes.map((e) => (
          <tr key={useId()} onClick={() => handleClick(e.CodAtivo)}>
            <td>
              <C.AssetContainer>
                <div>
                  {e.Image && <img src={e.Image} alt={e.CodAtivo} />}
                </div>
                <div>
                  <p><strong>{e.CodAtivo}</strong></p>
                  <p className="asset-subtitle">{e.Subtitle && `-| ${e.Subtitle}`}</p>
                </div>
              </C.AssetContainer>
            </td>
            <td>
              <C.PriceContainer>
                <p className="green">
                  {updateAssetsQty(e)}
                </p>
                <p>{`R$ ${e.Valor.toString().replace('.', ',')}`}</p>
              </C.PriceContainer>
            </td>
          </tr>
        ))}
      </tbody>
    </C.Table>
  );
}
