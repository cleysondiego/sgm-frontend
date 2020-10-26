import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Noise, Overlay, Terminal } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <Noise />
      <Overlay />
      <Terminal>
        <h1>
          Erro <span>404</span>
        </h1>
        <p className="output">
          A página que você está procurando pode ter sido removida, teve seu
          nome alterado ou está temporariamente indisponível.
        </p>
        <p className="output">
          Por favor, volte para a <Link to="/dashboard">Página Principal</Link>.
        </p>
        <p className="output">Boa Sorte.</p>
      </Terminal>
    </Container>
  );
};

export default NotFound;
