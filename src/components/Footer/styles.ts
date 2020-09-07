import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  background: #283336;
`;

export const FooterStyled = styled.footer`
  flex: 0;

  h5 {
    color: #fff;
    font-size: 1em;
    margin-top: 1em;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 20px;

  h3 {
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
  }

  a {
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;

    &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
    }

    svg {
      font-size: 18;
      margin-right: 16px;
    }
  }
`;
