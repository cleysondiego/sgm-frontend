import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

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
        text-align: center;
      }
    }
  }
`;
