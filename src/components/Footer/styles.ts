import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 30px;
  background: radial-gradient(
    circle,
    rgba(92, 39, 251, 1) 0%,
    rgba(112, 71, 247, 1) 100%
  );
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  height: auto;
  margin: 0 auto;

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
  margin-left: 60px;
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
