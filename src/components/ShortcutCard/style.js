import styled from 'styled-components';

export const PrimaryCard = styled.button`
  background-color: #ffc709;
  border: none;
  border-radius: 6px;
  border: solid 1px #ffc709;
  height: 120px;
  margin-top: 10px;
  transition: all 0.2s ease-in-out;
  width: 48%;

  p {
    color: #1c1c1c!important;
  }

  h3 {
    color: #1c1c1c!important;
  }

  &:hover {
    background-color: #1c1c1c;
    border-color: #1c1c1c;
    
    h3 {
      color: white!important;
    }

    p {
      color: white!important;
    }
  }

  &:active {
    background-color: #6f6f6f;
    border-color: #6f6f6f;
    color: white;
  }
`;

export const SecondaryCard = styled.button`
  background-color: #1c1c1c;
  border: none;
  border-radius: 6px;
  border: solid 1px #939393;
  height: 120px;
  margin-top: 10px;
  transition: all 0.2s ease-in-out;
  width: 48%;

  &:hover {
    background-color: #ffc709;
    border-color: #ffc709;
    
    h3 {
      color: #1c1c1c!important;
    }

    p {
      color: #1c1c1c!important;
    }
  }

  &:active {
    background-color: rgb(224, 173, 0);
    border-color: rgb(224, 173, 0);
    color: #1c1c1c;
  }
`;

export const Container = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 18px;
  text-align: left;
  width: 100%;

  p {
    color: white;
  }
`;

export const CardTitle = styled.h3`
  color: white;
  font-size: 16px;
`;
