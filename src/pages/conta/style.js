import styled from 'styled-components';

export const PrimaryButton = styled.button`
  border: none;
  border-radius: 6px;
  font-weight: 600;
  margin-bottom: 40px;
  padding: 8px 0;
  width: 45%;

  &:focus {
    outline: none;
    background-color: green;
    color: white;
  }
`;

export const SecondaryButton = styled.button`
  background-color: black;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  padding: 8px 0;
  width: 45%;
`;

export const Section = styled.section`

`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;

  input {
    border: solid 1px rgb(200, 200, 200);
    border-radius: 6px;
    padding: 10px;
    width: calc(100% - 30px);

    &::placeholder {
      font-style: italic;
      text-align: center;
    }

  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  width: 100%;

  a {
    width: 45%;

    button {
      width: 100%;
    }
  }
`;

export const SaldoContainer = styled.div`
  align-items: center;
  background-color: rgb(200, 200, 200);
  display: flex;
  justify-content: space-around;
  margin: 25px 0;
  padding: 12px;

  h2 {
    font-style: italic;
    font-size: 20px;
    font-weight: 400;
  }

  p {
    font-size: 20px;
    font-weight: 600;
  }
`;
