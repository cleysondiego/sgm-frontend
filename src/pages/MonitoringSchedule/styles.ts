import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;

  width: 100%;

  flex: 1;

  margin-top: 32px;

  h1 {
    font-size: 30px;
    color: #900;
  }

  table {
    margin-top: 32px;
    max-width: 1120px;
    width: 100%;

    tbody {
      align-items: center;
      justify-content: center;
      font-size: 24px;

      td,
      th {
        border-bottom: 1px solid #999;
        padding: 8px;
        text-align: left;
      }

      td {
        a {
          color: #000;
          text-decoration: none;

          &:hover {
            opacity: 0.8;
          }
        }

        button:last-child {
          margin-left: 8px;
        }
      }
    }
  }
`;
