import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  > form {
    margin-top: 32px;
    max-width: 340px;
    width: 100%;
  }
`;
