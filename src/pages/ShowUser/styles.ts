import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  form {
    display: flex;
    flex-direction: column;

    margin: 16px 0;
    width: 440px;

    > div:first-child {
      display: flex;
      flex-direction: row;
      margin-bottom: 16px;
      justify-content: space-between;
    }

    > div:last-of-type {
      display: flex;
      flex-direction: column;
      margin-top: 16px;

      width: 100%;

      span {
        align-self: center;
        margin-bottom: 8px;
        font-size: 16px;
      }

      select {
        font-size: 16px;
        padding: 16px;

        height: 56px;

        color: #232129;
        border: 2px solid #232129;
        border-radius: 10px;
      }
    }

    button {
      border: 0;
      background: none;

      svg {
        width: 32px;
        height: 32px;
        color: #d62d2d;
      }
    }
  }
`;
