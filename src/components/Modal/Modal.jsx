import React from 'react';
import { Link } from 'react-router-dom';
import * as C from './style';

export default function Modal(active, message = 'Você não tem dinheiro suficiente para realizar a transação :(') {
  return (
    <C.ModalContainer>
      <C.ModalFix>
        <div>
          <C.ModalMessage>
            {message}
          </C.ModalMessage>
        </div>
        <C.ModalButtonsContainer>
          <Link to="/conta" onClick={() => active(false)}>
            <button type="button">Fazer depósito</button>
          </Link>
          <button type="button" onClick={() => active(false)}>Voltar</button>
        </C.ModalButtonsContainer>
      </C.ModalFix>
    </C.ModalContainer>
  );
}
