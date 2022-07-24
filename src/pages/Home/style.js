import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;

  a {
    width: 48%;

    button {
      width: 100%;
    }
  }
`;

export const Container = styled.div`
  h2 {
    color: #1c1c1c;
    font-size: 32px;
    padding: 20px 20px 0;
  }

  @media (min-width: 390px) {
    h2 {
      font-size: 36px;
    }
  }
`;

export const WelcomeText = styled.p`
  font-size: 12px;
  padding: 4px 20px 0;
  
  @media (min-width: 390px) {
    font-size: 16px;
  }
`;
