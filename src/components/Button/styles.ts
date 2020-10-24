import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  isLogged: boolean;
}

export const Container = styled.button<ButtonProps>`
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  background: #283336;

  &:hover {
    background: ${shade(0.2, '#283336')};
  }

  ${props =>
    props.isLogged &&
    css`
      background: #28252e;

      &:hover {
        background: ${shade(0.2, '#28252e')};
      }
    `}
`;
