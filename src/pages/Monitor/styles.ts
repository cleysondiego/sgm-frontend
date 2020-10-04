import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const Body = styled.div`
  padding-top: 80px;
  padding-bottom: 263px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 1500px;
  text-align: center;
  justify-content: space-around;
`;

const appearFromLeft = keyframes`
from{
  opacity: 0;
  transform: translateX(-50px);
}
to{
  opacity: 1;
  transform: translateX(0);
}
`;

export const AnimatedContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1500px;
  text-align: center;
  justify-content: space-around;
  animation: ${appearFromLeft} 1s;

  /* div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  } */

  h1 {
    margin-top: 35px;
    margin-bottom: 35px;
    font-size: 60px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #283336;
    color: #fff;
    border-radius: 16px;
    font-size: 40px;
    height: 80px;
    text-align: center;
    text-decoration: none;
  }

  form div {
    display: flex;
    flex-direction: row;

    width: 100%;
    margin: 20px 15px 0 0;

    &:last-child {
      margin-right: 0px;
    }

    div {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 844px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
