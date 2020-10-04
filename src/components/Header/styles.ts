import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ListProps {
  isClicked: boolean;
}

export const Container = styled.nav`
  display: flex;
  position: absolute;
  top: 0;
  width: 100%;
  height: 64px;
  background: #283336;
  align-items: center;
  font-size: 1.2rem;

  @media screen and (max-width: 844px) {
    display: block;
    text-align: center;
    padding: 1.5rem;
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;

    &:hover {
      transition: 250ms;
    }
  }

  @media screen and (max-width: 844px) {
    position: relative;
  }
`;

export const List = styled.ul<ListProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 1500px;
  margin: 0 auto;
  list-style: none;
  text-align: center;

  li {
    a {
      font-size: 20px;
      color: #fff;
      font-weight: bold;
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;

      &:hover {
        background-color: ${shade(0.2, '#283336')};
        border-radius: 4px;
        transition: all 0.2s case-out;
      }

      @media screen and (max-width: 844px) {
        text-align: center;
        width: 100%;
        display: table;

        &:hover {
          background-color: ${shade(0.2, '#283336')};
          border-radius: 0;
        }
      }
    }
  }

  @media screen and (max-width: 844px) {
    display: none;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 80px;

    ${props =>
      props.isClicked &&
      css`
        display: flex;
        background: #283336;
        left: 0%;
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
