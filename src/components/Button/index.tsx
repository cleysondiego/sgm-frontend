import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLogged?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  isLogged = false,
  children,
  ...rest
}) => {
  return (
    <Container type="button" isLogged={isLogged} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
