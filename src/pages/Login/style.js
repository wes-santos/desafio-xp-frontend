import styled from 'styled-components';

export const Form = styled.form`
  align-items: center;
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const Label = styled.label`
  width: 70%;

  p {
    color: white;
    font-size: 14px;
    font-weight: 600;
  }

  input {
    background-color: transparent;
    border: none;
    border-bottom: solid 1px white;
    color: white;
    padding: 8px;
    transition: all 0.4s ease-in-out;
    width: 100%;

    &:focus {
      border-bottom: solid 2px white;
      color: white;
      outline: none;
    }
  }

  @media (min-width: 390px) {
    p {
      font-size: 18px;
    }
  }
`;

export const Button = styled.button`
  background-color: #ffc709;
  border: none;
  font-weight: bold;
  margin-top: 50px;
  padding: 10px;
  transition: all 0.2s ease-in-out;
  width: 100%;

  &:hover {
    background-color: rgb(255, 231, 153);
    cursor: pointer;
  }

  &:active {
    background-color: rgb(224, 173, 0);
  }

  &:disabled {
    opacity: 0.4;
    color: #1c1c1c;
    cursor: not-allowed;
  }
`;
