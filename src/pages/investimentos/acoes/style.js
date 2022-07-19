import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-content: space-around;
  width: 100%;

  h2 {
    font-size: 22px;
    text-transform: uppercase;
    border-bottom: solid 3px #ffc709;
    margin-bottom: 10px;
  }

  & section {
    margin: 30px 0; 
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
  margin-bottom: 40px;
  padding: 8px 0;
  width: 100%;

  &:active {
    background-color: #363636;
  }
`;
