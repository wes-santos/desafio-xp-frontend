import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-content: space-around;
  width: 100%;

  & section {
    margin: 30px 0;

    table {
      text-align: center;
      width: 100%;

      th {
        background-color: grey;
        padding: 4px;
        font-size: 12px;
      }
    }
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const Button = styled.button`
background-color: black;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  padding: 8px 0;
  width: 100%;

  &:active {
    background-color: #363636;
  }
`;