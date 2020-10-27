import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const appearFromLeft = keyframes`
  from {
  opacity: 0;
  transform: translateX(-50px);
  }
  to {
  opacity: 1;
  transform: translateX(0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  animation: ${appearFromLeft} 1s;
  width: 1500px;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  h1 {
    font-size: 36px;
    color: #900;
  }

  p {
    max-width: 500px;
    font-size: 26px;
    text-align: justify;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #283336;
    color: #fff;
    border-radius: 16px;
    font-size: 26px;
    height: 80px;
    text-align: center;
    text-decoration: none;
  }

  img {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 844px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
