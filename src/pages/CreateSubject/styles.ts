import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 560px;
    width: 100%;

    form {
      width: 340px;

      margin: 80px 0;
      text-align: center;

      display: flex;
      flex-direction: column;

      h1 {
        margin-bottom: 24px;
        font-size: 20px;
        text-align: left;
      }

      > input:last-of-type {
        border-radius: 10px;
        padding: 16px;
        padding-right: 0px;
        width: 100%;

        border: 2px solid #232129;
        color: #232129;

        display: flex;
        align-items: center;

        margin-top: 8px;
      }
    }
  }
`;
