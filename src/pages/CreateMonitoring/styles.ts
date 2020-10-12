import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  form {
    margin: 16px 0;
    width: 440px;

    > div {
      display: flex;
      flex-direction: column;
      margin-top: 16px;

      width: 100%;

      > span {
        align-self: center;
        margin-bottom: 8px;
        font-size: 24px;
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
  }
`;
