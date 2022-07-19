import styled from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  width: 100vw;
`;

export const Title = styled.h2`
  margin: 10px 0;
`;

export const SecondaryButton = styled.button`
  background-color: black;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  padding: 8px 0;
  width: 45%;

  &:active {
    background-color: #363636;
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

export const MainContainer = styled.div`
  padding: 15px;

  form label {
    font-size: 13px;
    padding: 1px;
  }

  form input {
    margin-top: 2px;
    padding: 4px 6px;
    width: 100%;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85%;
`;

export const BuyAndSellContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  button {
    border: none;
    font-weight: bold;
    padding: 6px 8px;
    width: 47%;
  }
`;

export const QuantityLabel = styled.label`
  div {
    display: flex;
  }

  input {
    margin-top: 2px;
    padding: 4px 6px;
    text-align: center;
    width: 100%;
  }

  button {
    border: none;
    background-color: transparent;
    font-size: 16px;
    width: 20px;
  }
`;

export const H3 = styled.h3`
  color: #939393;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: -8px;
`;
