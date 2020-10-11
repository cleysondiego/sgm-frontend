import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  form {
    margin: 80px 0;
    width: 340px;
    display: flex;
    flex-direction: column;

    > div:first-child {
      display: flex;
      margin-bottom: 16px;
      justify-content: space-between;
    }

    button {
      border: 0;
      background: none;

      svg {
        width: 32px;
        height: 32px;
      }
    }
  }
`;
