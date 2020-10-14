import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 1120px;

    h1 {
      margin-top: 24px;
      font-size: 36px;
    }

    span {
      margin-bottom: 24px;
    }

    P {
      font-size: 24px;
      line-height: 32px;
    }
  }

  div:last-child {
    flex-direction: row;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: #ffffff;
  max-width: 350px;
  max-height: 450px;

  width: 300px;
  height: 300px;

  margin-top: 48px;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  text-align: center;

  margin-right: 16px;

  &:last-child {
    margin-right: 0px;
  }
`;

export const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 100%;
  padding: 24px;

  text-decoration: none;

  color: #232129;

  svg {
    width: 32px;
    height: 32px;
  }

  strong {
    font-size: 24px;
    color: #d62d2d;
  }
`;
