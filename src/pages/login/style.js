import styled from 'styled-components';

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const Input = styled.input`
  padding: 6px;
  width: 50%;

  &::placeholder {
    text-align: center;
  }
`;

export const Button = styled.button`
  padding: 6px;
  width: 100%;
`;
