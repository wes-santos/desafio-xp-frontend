import styled from 'styled-components';

export const PrimaryButton = styled.button`
  border: none;
  font-weight: 600;
  margin-bottom: 40px;
  padding: 8px 8px;
  width: 47%;
`;

export const SecondaryButton = styled.button`
  background-color: black;
  border: none;
  color: white;
  font-weight: 600;
  padding: 8px 0;
  width: 47%;

  &:active {
    background-color: #363636;
  }
`;

export const Section = styled.section`
  
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  align-items: center;

  input {
    border: solid 1px rgb(200, 200, 200);
    border-radius: 2px;
    padding: 10px;
    text-align: center;
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
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: space-around;
  margin: 25px 0;
  padding: 12px;

  h2 {
    font-size: 16px;
    font-weight: 400;
  }

  p {
    font-size: 22px;
    font-weight: 600;
  }

  @media (min-width: 390px) {
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 26px;
    }
  }
`;
