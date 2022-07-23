import React from 'react';
import * as C from './style';

export default function Modal(message = 'Estamos com um problema interno, por favor, tente novamente mais tarde') {
  return (
    <C.ModalContainer>
      <C.ModalFix>
        <div>
          <C.ModalMessage>
            {message}
          </C.ModalMessage>
        </div>
        <C.ModalButtonsContainer>
          { /* eslint-disable-next-line no-undef */ }
          <button type="button" onClick={() => window.location.reload()}>Atualizar a página</button>
        </C.ModalButtonsContainer>
      </C.ModalFix>
    </C.ModalContainer>
  );
}
