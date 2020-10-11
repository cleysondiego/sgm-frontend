import styled from 'styled-components';

export const Header = styled.header`
  height: 144px;
  background: #28252e;

  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    svg {
      color: #fff;
      width: 24px;
      height: 24px;
    }

    h1 {
      color: #fff;
    }
  }
`;
