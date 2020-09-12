import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const Body = styled.div`
  padding-top: 80px;
  padding-bottom: 263px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 1500px;
  text-align: center;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  h1 {
    margin-top: 35px;
    font-size: 60px;
  }

  table {
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  table,
  th,
  td {
    border: 1px solid black;
  }

  th,
  td {
    padding: 5px;
  }

  th {
    font-size: 30px;
  }

  td {
    font-size: 25px;
    height: 200px;
    vertical-align: bottom;

    &:first-child {
      font-size: 30px;
      font-weight: bold;
      vertical-align: middle;
    }
  }

  @media screen and (max-width: 844px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
