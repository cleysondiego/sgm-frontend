import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  padding: 20px 10px;
  background: #283336;
  width: 100%;

  h5 {
    display: block;
    color: #fff;
    font-size: 1em;
    margin-top: 1em;
    margin-left: 0;
    margin-right: 0;
    text-align: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
`;

export const Link = styled.a`
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
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
