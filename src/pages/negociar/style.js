import styled from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  width: 100vw;
`;

export const Title = styled.h2`
  margin: 10px 0;
`;

export const BuyButton = styled.button`
  background-color: rgb(39, 108, 219);
  border: none;
  border-radius: 6px 0 0 6px;
  color: white;
  font-weight: 600;
  padding: 8px;
`;

export const SellButton = styled.button`
  background-color: green;
  border: none;
  border-radius: 6px 0 0 6px;
  color: white;
  font-weight: 600;
  padding: 8px;
`;

export const sellAndBuyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    width: 30%;
  }

  input {
    border: 1px solid rgb(200, 200, 200);
    border-radius: 0 6px 6px 0;
    padding: 7px;
    width: 70%;
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

export const TableContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  justify-content: space-around;
  width: 100%;

  table {
    text-align: center;
    width: 100%;

    th {
      background-color: grey;
      padding: 4px;
      font-size: 12px;
    }
  }
`;

export const MainContainer = styled.div`
  padding: 15px;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85%;
`;