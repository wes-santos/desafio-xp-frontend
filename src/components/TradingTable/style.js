import styled from 'styled-components';

export default styled.div`
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
      background-color: #d1d1d1;
      padding: 4px;
      font-size: 12px;
    }
  }

  @media (min-width: 390px) {
    table th {
      font-size: 16px;
    }
  }
`;
