import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
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

export const AnimatedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  place-content: center;

  width: 100%;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 16px 0;
    flex-direction: column;
    text-align: center;

    max-width: 749px;

    h1 {
      margin-bottom: 24px;
      font-size: 30px;
      color: #900;
    }

    & > div {
      display: flex;
      flex-direction: row;

      margin-top: 20px;
    }

    & > div > div {
      margin-top: 0;
      margin-right: 16px;

      &:last-child {
        margin-right: 0px;
      }
    }

    & > button {
      font-size: 20px;
      margin-bottom: 20px;
    }

    & > div > select {
      flex: 1;
      font-size: 16px;
      padding: 2px;

      margin-right: 16px;

      color: #232129;
      border: 2px solid #232129;
      border-radius: 10px;
    }
  }

  @media screen and (max-width: 844px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
