import styled, { css } from 'styled-components';

interface ListProps {
  isClicked: boolean;
}

export const Container = styled.nav`
  background: linear-gradient(
    90deg,
    rgb(110, 94, 254) 0%,
    rgba(73, 63, 252, 1) 100%
  );
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;

  button {
    padding: 8px 20px;
    border-radius: 4px;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
      padding: 8px 20px;
      transition: all 0.3s ease-out;
      background: #fff;
      color: #6568f4;
      transition: 250ms;
    }

    @media screen and (max-width: 844px) {
      display: block;
      text-align: center;
      padding: 1.5rem;
      margin: 2rem auto;
      border-radius: 4px;
      width: 80%;
      background: #4ad9e4;
      text-decoration: none;
      color: #fff;
      font-size: 1.5rem;

      &:hover {
        background: #fff;
        color: #6568f4;
        transition: 250ms;
      }
    }
  }

  @media screen and (max-width: 844px) {
    position: relative;
  }
`;

export const List = styled.ul<ListProps>`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: max-content;
  justify-content: space-around;
  margin-right: 2rem;

  li {
    a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;

      &:hover {
        background-color: #6d76f7;
        border-radius: 4px;
        transition: all 0.2s case-out;
      }

      @media screen and (max-width: 844px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
          background-color: #7577fa;
          border-radius: 0;
        }
      }

      &::after {
        display: none;
      }
    }
  }

  @media screen and (max-width: 844px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
    position: absolute;
    top: 80px;
    left: 100%;
    opacity: 1;
    transition: all 0.5s ease;

    ${props =>
      props.isClicked &&
      css`
        background: #6668f4;
        left: 0%;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
      `}
  }
`;

export const MenuButton = styled.div`
  display: none;

  svg {
    color: #fff;
    font-size: 2rem;
  }

  @media screen and (max-width: 844px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
