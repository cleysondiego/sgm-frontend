import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  disabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  padding: 16px;
  padding-right: 0px;
  width: 100%;

  border: 2px solid #232129;
  color: #232129;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.disabled &&
    css`
      opacity: 0.7;
    `}

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #900;
      border-color: #900;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #900;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #232129;

    padding-right: 32px;

    width: 100%;

    &::placeholder {
      color: #232129;
    }

    &:disabled {
      opacity: 0.7;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;

  svg {
    margin: 0px;
    position: absolute;
    right: 5px;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
