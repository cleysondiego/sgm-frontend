import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: center;
  padding: 20px 10px;
  background: #283336;

  @media screen and (max-width: 877px) {
    position: relative;
  }
`;

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1500px;

  h5 {
    color: #fff;
    font-size: 1em;
    text-align: center;
  }

  hr {
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  @media screen and (max-width: 487px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 20px;

  h3 {
    font-size: 24px;
    color: #fff;
    margin-bottom: 20px;
    font-weight: bold;

    @media screen and (max-width: 877px) {
      margin-bottom: 10px;
    }
  }

  a {
    display: flex;
    align-items: center;
    align-self: center;
    color: #fff;
    padding: 0.5rem 1rem;
    font-size: 18px;
    text-decoration: none;

    &:hover {
      background-color: ${shade(0.2, '#283336')};
      transition: 200ms ease-in;
    }

    svg {
      font-size: 18;
      margin-right: 16px;
    }
  }

  @media screen and (max-width: 877px) {
    margin: 15px 0;
  }
`;

export const GroupColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 750px;

  @media screen and (max-width: 877px) {
    flex-direction: column;

    &:first-child {
      margin-right: 100px;
    }
  }

  @media screen and (max-width: 487px) {
    &:first-child {
      margin-right: 0;
    }
  }
`;
