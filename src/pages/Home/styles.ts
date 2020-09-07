import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const Content = styled.div`
  max-width: 1500px;
  padding-top: 80px;
  padding-bottom: 272px;

  @media screen and (max-width: 877px) {
    padding-bottom: 0;
  }

  @media screen and (max-width: 844px) {
    padding-top: 0;
  }
`;
