import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 80px;
  padding-bottom: 263px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1500px;
  text-align: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  h1 {
    font-size: 60px;
  }

  p {
    max-width: 500px;
    font-size: 30px;
    text-align: justify;
  }

  a {
    background-color: #283336;
    color: #fff;
    border-radius: 16px;
    font-size: 40px;
    text-align: center;
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
