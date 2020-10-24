import styled, { keyframes } from 'styled-components';

export const Container = styled.div``;

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
  padding-top: 80px;
  padding-bottom: 263px;

  width: 100%;
  margin-top: 32px;

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
