import React, { useState, useCallback } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Container, List, MenuButton } from './styles';

const Header: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = useCallback(() => {
    setIsClicked(!isClicked);
  }, [isClicked]);

  return (
    <Container>
      <List isClicked={isClicked}>
        <li>
          <a href="/home">Página Inicial</a>
        </li>
        <li>
          <a href="/home">Agenda de Monitorias</a>
        </li>
        <li>
          <a href="/home">Seja um Monitor</a>
        </li>
        <li>
          <a href="/home">Entrar</a>
        </li>
      </List>
      <MenuButton onClick={handleClick}>
        {isClicked ? <FaTimes /> : <FaBars />}
      </MenuButton>
    </Container>
  );
};

export default Header;
