/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import * as C from './style';
import TradingTable from '../../components/TradingTable/TradingTable';
import './negociar.css';
import {
  buyAsset, sellAsset, subtractMoney, sumMoney,
} from '../../redux/actions';
import Modal from '../../components/Modal/Modal';

export default function Negociar() {
  const { clickedAsset, balance, allAssets } = useSelector((state) => state.user);
  const [qty, setQty] = useState(1);
  const [isBuyClicked, setBuyClick] = useState(true);
  const [isSellClicked, setSellClick] = useState(false);
  const [isModalVisible, setModalVisibility] = useState(false);
  const dispatch = useDispatch();

  const asset = allAssets.find((e) => e.CodAtivo === clickedAsset);

  const [buyAmount, setBuyAmount] = useState(asset.Valor);

  useEffect(() => {
    setBuyAmount(asset.Valor);
  }, [asset]);

  const handleChange = ({ target: { value } }) => {
    setQty(() => {
      const result = value ? parseInt(value, 10) : 1;
      setBuyAmount((result * asset.Valor).toFixed(2));
      return result;
    });
  };

  const sumQty = () => {
    setQty((prev) => {
      const result = parseInt(prev, 10) + 1;
      setBuyAmount((result * asset.Valor).toFixed(2));
      return result;
    });
  };
  const subQty = () => {
    setQty((prev) => {
      const result = prev > 0 && prev !== 1 ? parseInt(prev, 10) - 1 : 1;
      setBuyAmount((result * asset.Valor).toFixed(2));
      return result;
    });
  };

  const handleSell = () => {
    setSellClick(true);
    setBuyClick(false);
  };

  const handleBuy = () => {
    setBuyClick(true);
    setSellClick(false);
  };

  const handleBuyOrSellAsset = () => {
    if (balance - buyAmount < 0) {
      return setModalVisibility(true);
    }

    if (isBuyClicked) {
      dispatch(buyAsset(asset, qty));
      setQty(1);
      dispatch(subtractMoney(buyAmount));
      return setBuyAmount(asset.Valor);
    }

    if (isSellClicked) {
      dispatch(sellAsset(asset, qty));
      setQty(1);
      dispatch(sumMoney(buyAmount));
      return setBuyAmount(asset.Valor);
    }

    return false;
  };

  return (
    <C.Section>
      {Header()}
      {isModalVisible && Modal(setModalVisibility)}
      <C.PageWrapper>
        <C.MainContainer>
          <C.Title>Comprar/Vender Ação</C.Title>

          <C.H3>
            Valor disponível: R$
            {' '}
            {balance.toString().replace('.', ',')}
          </C.H3>

          {TradingTable(asset)}

          <C.BuyAndSellContainer>
            <button
              type="button"
              className={isBuyClicked ? 'yellow' : 'light-grey'}
              onClick={handleBuy}
            >
              Comprar
            </button>
            <button
              type="button"
              className={isSellClicked ? 'yellow' : 'light-grey'}
              onClick={handleSell}
            >
              Vender
            </button>
          </C.BuyAndSellContainer>

          <form>
            <C.QuantityLabel htmlFor="qtyInput">
              <p>Quantidade</p>
              <div>
                <button type="button" className="subButton" onClick={subQty}>-</button>
                <input
                  type="number"
                  id="qtyInput"
                  value={qty}
                  onChange={handleChange}
                  min="1"
                />
                <button type="button" className="addButton" onClick={sumQty}>+</button>
              </div>
            </C.QuantityLabel>
            <label htmlFor="priceInput">
              <p>Preço de compra</p>
              <input
                type="number"
                id="priceInput"
                value={asset.Valor}
                readOnly
              />
            </label>
            <label htmlFor="totalInput">
              <p>Valor estimado</p>
              <input
                type="number"
                id="totalInput"
                value={buyAmount}
                readOnly
              />
            </label>
          </form>
        </C.MainContainer>

        <C.ButtonsContainer>
          <Link to="/investimentos/acoes">
            <C.SecondaryButton type="button">
              Voltar
            </C.SecondaryButton>
          </Link>
          <C.SecondaryButton type="Confirmar" onClick={handleBuyOrSellAsset}>
            Confirmar
          </C.SecondaryButton>
        </C.ButtonsContainer>
      </C.PageWrapper>
    </C.Section>
  );
}
