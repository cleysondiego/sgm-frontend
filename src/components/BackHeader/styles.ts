import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  height: 144px;
  width: 100%;
  background: #28252e;
  align-items: center;
  justify-content: center;

  div {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    max-width: 1120px;

    div {
      align-items: center;
      justify-content: center;
    }

    div:first-child {
      align-items: center;
      justify-content: flex-start;
    }

    div:last-child {
      align-items: center;
      justify-content: flex-end;
    }

    svg {
      color: #fff;
      width: 24px;
      height: 24px;
    }

    h1 {
      color: #fff;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  }
`;
