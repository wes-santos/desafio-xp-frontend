import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as C from './style';
import Header from '../../components/header/Header';
import './conta.css';
import { addMoney, subtractMoney } from '../../redux/actions';
import Modal from '../../components/Modal/Modal';

export default function Conta() {
  const [isWithdrawClicked, setWithdrawClicked] = useState(false);
  const [isDepositClicked, setDepositClick] = useState(true);
  const globalState = useSelector((state) => state.user);
  const [money, setMoney] = useState('');
  const [isModalVisible, setModalVisibility] = useState(false);
  const dispatch = useDispatch();

  const handleDepositClick = () => {
    setDepositClick(true);
    setWithdrawClicked(false);
  };

  const handleWithdrawClick = () => {
    setWithdrawClicked(true);
    setDepositClick(false);
  };

  const inputRef = useRef(null);
  const saveMoney = () => {
    try {
      if (!(money !== '')) {
        inputRef.current.placeholder = 'Você precisa digitar um valor';
        return inputRef.current.focus();
      }
      dispatch(isDepositClicked ? addMoney(money) : subtractMoney(money));
      inputRef.current.placeholder = 'Informe o valor';
      return setMoney('');
    } catch (err) {
      setModalVisibility(true);
      return Modal(setModalVisibility);
    }
  };

  return (
    <C.Section>
      {Header()}
      {isModalVisible && Modal(setModalVisibility)}
      <C.SaldoContainer>
        <h2>Valor disponível </h2>
        <p data-testid="user-balance">{`R$ ${globalState.balance}`}</p>
      </C.SaldoContainer>
      <C.MainContainer>
        <C.ButtonsContainer>
          <C.PrimaryButton
            type="button"
            className={isDepositClicked ? 'yellow' : 'light-grey'}
            onClick={handleDepositClick}
          >
            Depósito
          </C.PrimaryButton>
          <C.PrimaryButton
            type="button"
            className={isWithdrawClicked ? 'yellow' : 'light-grey'}
            onClick={handleWithdrawClick}
          >
            Retirada
          </C.PrimaryButton>
        </C.ButtonsContainer>
        <input
          type="number"
          ref={inputRef}
          placeholder="Informe o Valor"
          onChange={({ target }) => setMoney(target.value)}
          value={money}
        />
      </C.MainContainer>
      <C.ButtonsContainer>
        <Link to="/home">
          <C.SecondaryButton type="button">
            Voltar
          </C.SecondaryButton>
        </Link>
        <C.SecondaryButton type="button" onClick={saveMoney}>
          Confirmar
        </C.SecondaryButton>
      </C.ButtonsContainer>
    </C.Section>
  );
}
