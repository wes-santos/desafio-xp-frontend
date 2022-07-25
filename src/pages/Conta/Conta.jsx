import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as C from './style';
import Header from '../../components/header/Header';
import './conta.css';
import { addMoney, subtractMoney } from '../../redux/actions';
import Modal from '../../components/Modal/Modal';
import SuccessModal from '../../components/SuccessModal';

export default function Conta() {
  const globalState = useSelector((state) => state.user);

  const inputRef = useRef(null);

  const [isWithdrawClicked, setWithdrawClicked] = useState(false);
  const [isDepositClicked, setDepositClick] = useState(true);
  const [money, setMoney] = useState('');
  const [isErrorModalVisible, setErrorModalVisibility] = useState(false);
  const [isValueValid, setIsValueValid] = useState(false);
  const [isSucessModalVisible, setIsSucessModalVisible] = useState(false);

  const dispatch = useDispatch();

  const handleDepositClick = () => {
    setDepositClick(true);
    setWithdrawClicked(false);
  };

  const handleWithdrawClick = () => {
    setWithdrawClicked(true);
    setDepositClick(false);
  };
  const saveMoney = () => {
    try {
      if (!(money !== '')) {
        inputRef.current.placeholder = 'Você precisa digitar um valor';
        return inputRef.current.focus();
      }

      if (parseFloat(money, 10) < 0) {
        return setIsValueValid(true);
      }

      dispatch(isDepositClicked ? addMoney(money) : subtractMoney(money));
      inputRef.current.placeholder = 'Informe o valor';
      setMoney('');
      return setIsSucessModalVisible(true);
    } catch (err) {
      setErrorModalVisibility(true);
      return Modal(setErrorModalVisibility);
    }
  };

  return (
    <C.Section>
      {Header()}
      {isErrorModalVisible && Modal(setErrorModalVisibility)}
      {isValueValid && Modal(setIsValueValid, 'O valor digitado precisa ser maior do que zero')}
      {isSucessModalVisible && SuccessModal(setIsSucessModalVisible)}
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
