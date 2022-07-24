import styled from 'styled-components';

export const Table = styled.table`
  text-align: center;
  width: 88vw;

  th {
    background-color: #d1d1d1;
    padding: 4px;
    font-size: 12px;
  }
  
  td {
    font-size: 14px;
    padding: 7px 0;
  }

  td button {
    width: 100%;
  }

  td img {
    border-radius: 6px;
    height: 40px;
    padding: 2px;
  }

  @media (min-width: 390px) {
    th {
      font-size: 16px;
    }

    td {
      font-size: 18px;
    }

    td img {
      height: 50px;
    }
  }
`;

export const PriceContainer = styled.div`
  flex-direction: column;
  align-items: end;

  p {
    text-align: right;
  }
`;

export const AssetContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  z-index: 0;

  div p {
    text-align: left;
  }
`;
