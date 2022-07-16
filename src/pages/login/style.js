import styled from 'styled-components';

export const Form = styled.form`
  align-items: center;
  background-color: #1C1C1C;
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
    padding: 8px;
    width: 100%;
    transition: all 0.4s ease-in-out;

    &:focus {
      border-bottom: solid 2px white;
      color: white;
      outline: none;
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
`;
