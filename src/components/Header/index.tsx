import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/">Página Inicial</Link>
        </li>
        <li>
          <Link to="/agenda">Agenda de Monitorias</Link>
        </li>
        <li>
          <Link to="/">Seja um Monitor</Link>
        </li>
        <li>
          <Link to="/entrar">Entrar</Link>
        </li>
      </List>
      <MenuButton onClick={handleClick}>
        {isClicked ? <FaTimes /> : <FaBars />}
      </MenuButton>
    </Container>
  );
};

export default Header;
