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
import SuccessModal from '../../components/SuccessModal';

export default function Negociar() {
  const {
    clickedAsset, balance, allAssets, ifFetched, userAssets,
  } = useSelector((state) => state.user);
  const [qty, setQty] = useState('1');
  const [isBuyClicked, setBuyClick] = useState(true);
  const [isSellClicked, setSellClick] = useState(false);
  const [isErrorModalVisible, setErrorModalVisibility] = useState(false);
  const [isTransactionNotOk, setIsTransactionNotOk] = useState(false);
  const [isSucessModalVisible, setIsSucessModalVisible] = useState(false);
  const dispatch = useDispatch();

  const asset = allAssets.length && allAssets.find((e) => e.codAtivo === clickedAsset);

  const [buyAmount, setBuyAmount] = useState(asset.valor.toString());

  useEffect(() => {
    setBuyAmount(asset.valor.toString());
  }, [asset]);

  const handleChange = ({ target: { value } }) => {
    setQty(() => {
      const result = parseInt(value, 10);
      setBuyAmount((result * asset.valor).toFixed(2).toString());
      return result;
    });
  };

  const sumQty = () => {
    setQty((prev) => {
      const result = parseInt(prev, 10) + 1;
      setBuyAmount((result * asset.valor).toFixed(2).toString());
      return result;
    });
  };
  const subQty = () => {
    setQty((prev) => {
      const result = prev > 0 && prev !== 1 ? parseInt(prev, 10) - 1 : 1;
      setBuyAmount((result * asset.valor).toFixed(2).toString());
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

  // eslint-disable-next-line consistent-return
  const handleBuyOrSellAsset = () => {
    if (balance - buyAmount < 0) {
      return setErrorModalVisibility(true);
    }

    if (isBuyClicked) {
      dispatch(buyAsset(asset, qty));
      setQty(1);
      dispatch(subtractMoney(buyAmount));
      setBuyAmount(asset.valor.toString());
      return setIsSucessModalVisible(true);
    }

    if (isSellClicked) {
      try {
        if (userAssets.some((e) => e.codAtivo === asset.codAtivo)) {
          dispatch(sellAsset(asset, qty));
          setQty(1);
          dispatch(sumMoney(buyAmount));
          setBuyAmount(asset.valor.toString());
          return setIsSucessModalVisible(true);
        }
        throw new Error();
      } catch (error) {
        return setIsTransactionNotOk(true);
      }
    }
  };

  const handleFocus = ({ target }) => {
    target.select();
  };

  return (
    ifFetched ? <h1>Carregando...</h1> : (
      <C.Section>
        {Header()}
        {isErrorModalVisible && Modal(setErrorModalVisibility)}
        {isTransactionNotOk && Modal(setIsTransactionNotOk, 'Você não tem ações suficientes para realizar a transação :(')}
        {isSucessModalVisible && SuccessModal(setIsSucessModalVisible)}
        <C.PageWrapper>
          <C.MainContainer>
            <C.Title>Comprar/Vender Ação</C.Title>

            <C.H3>
              Valor disponível: R$
              {' '}
              <span data-testid="user-balance">
                {balance.toString().replace('.', ',')}
              </span>
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
                    data-testid="quantity-input"
                    value={qty}
                    onChange={handleChange}
                    onFocus={handleFocus}
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
                  value={asset.valor.toString()}
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
    )
  );
}
