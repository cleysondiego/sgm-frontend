import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
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
  flex-direction: column;
  width: 1500px;
  text-align: center;
  justify-content: space-around;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  margin: auto;
  margin-top: 10px;
  align-items: center;

  h2 {
    font-size: 30px;
  }

  input {
    margin: 15px;
  }
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
  flex-direction: column;
  width: 1500px;
  text-align: center;
  justify-content: space-around;
  animation: ${appearFromLeft} 1s;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: auto;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #283336;
      color: #fff;
      border-radius: 16px;
      font-size: 20px;
      height: 60px;
      text-align: center;
      text-decoration: none;
      margin-top: 15px;
    }
  }

  h1 {
    margin-top: 35px;
    margin-bottom: 35px;
    font-size: 60px;
  }

  @media screen and (max-width: 844px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
