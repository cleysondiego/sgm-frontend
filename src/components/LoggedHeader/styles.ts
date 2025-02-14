import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #28252e;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1120px;
  margin: 0 auto;

  align-items: center;

  button {
    background: transparent;
    border: 0;

    svg {
      color: #fff;
      width: 32px;
      height: 32px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 40px;

    font-size: 32px;

    span {
      color: #fff;
    }

    a {
      color: #d62d2d;
      text-decoration: none;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
