/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as C from './style';
import { saveClickedAsset } from '../../redux/actions';
import './style.css';

export default function Table({ acoes }) {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { userAssets, isFetching } = useSelector((state) => state.user);

  const handleClick = (asset) => {
    dispatch(saveClickedAsset(asset));
    return history('/negociar');
  };

  const updateAssetsQty = (asset) => {
    const actualAsset = asset && userAssets.find((e) => e.codAtivo === asset.codAtivo);
    if (actualAsset) {
      return actualAsset.qtdeAtivo;
    }
    return 0;
  };

  return (
    isFetching ? <h1>Carregando...</h1> : (
      <C.Table>
        <tbody>
          {acoes.length ? (
            acoes.map((e) => (
              <tr key={e.codAtivo} onClick={() => handleClick(e.codAtivo)}>
                <td>
                  <C.AssetContainer>
                    <div>
                      {e.imagem && <img src={e.imagem} alt={e.codAtivo} />}
                    </div>
                    <div>
                      <p><strong>{e.codAtivo}</strong></p>
                      <p className="asset-subtitle">{e.subtitulo && `-| ${e.subtitulo}`}</p>
                    </div>
                  </C.AssetContainer>
                </td>
                <td>
                  <C.PriceContainer>
                    <p className="green">
                      {updateAssetsQty(e)}
                    </p>
                    <p>{`R$ ${e.valor.toString().replace('.', ',')}`}</p>
                  </C.PriceContainer>
                </td>
              </tr>
            ))) : acoes}
        </tbody>
      </C.Table>
    )
  );
}
