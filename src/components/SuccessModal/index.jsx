import React from 'react';
import { Link } from 'react-router-dom';
import * as C from './style';

export default function SuccessModal(active) {
  return (
    <C.ModalContainer>
      <C.ModalFix>
        <div>
          <C.ModalMessage>
            Transação realizada com sucesso!
          </C.ModalMessage>
        </div>
        <C.ModalButtonsContainer>
          <Link to="/investimentos/acoes" onClick={() => active(false)}>
            <button type="button">Página de ações</button>
          </Link>
          <button type="button" onClick={() => active(false)}>Voltar</button>
        </C.ModalButtonsContainer>
      </C.ModalFix>
    </C.ModalContainer>
  );
}
