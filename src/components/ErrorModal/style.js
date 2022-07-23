import styled from 'styled-components';

export const ModalContainer = styled.div`
  align-items: center;
  display: flex;
  backdrop-filter: blur(3px);
  background-color: rgba(0, 0, 0, 0.9);
  height: 100vh;
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
  
  button {
    background-color: #ffc709;
    border: none;
    border-radius: 4px;
    color: black;
    font-size: 18px;
    font-weight: bold;
    padding: 8px;
    text-align: center;
    transition: all 0.2s ease-in-out;
    width: 100%;

    &:hover {
      cursor: pointer;
      background-color: rgb(255, 231, 153);
    }

    &:active {
      background-color: rgb(224, 173, 0);
    }
  }
`;

export const ModalMessage = styled.p`
  color: white;
  display: flex;
  font-size: 22px;
  font-weight: bold;
  justify-content: center;
  margin-top: 30px;
  padding: 8px;
  text-align: center;
`;

export const ModalFix = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;
