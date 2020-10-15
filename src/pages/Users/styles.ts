import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  button {
    border: 0;
    background: none;

    svg {
      width: 32px;
      height: 32px;
      color: #d62d2d;
    }
  }

  > button:first-child {
    margin-top: 32px;
  }

  table {
    margin-top: 32px;
    max-width: 1120px;
    width: 100%;

    tbody {
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
