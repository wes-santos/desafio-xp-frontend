import styled from 'styled-components';

export const ModalContainer = styled.div`
  align-items: center;
  display: flex;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.8);
  height: 87vh;
  position: absolute;
  width: 100%;
`;

export const ModalButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 20px;
  width: 100%;

  a {
    width: 45%;
  }
  
  button {
    border: none;
    border-radius: 4px;
    padding: 8px;
    text-align: center;
    width: 50%;
    background-color: #1c1c1c;
    color: white;
    font-weight: bold;
  }

  a button {
    width: 100%;
    color: black;
    background-color: #ffc709
  }
`;

export const ModalMessage = styled.p`
  color: white;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  margin-top: 30px;
  text-align: center;

  @media (min-width: 390px) {
    font-size: 20px;
  }
`;

export const ModalFix = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30%;
`;
