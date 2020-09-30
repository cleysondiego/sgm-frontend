import React, { useCallback } from 'react';
import { useAuth } from '../../hooks/auth';

import { Container, Body, Content } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  const handleLogOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <Body>
        <Content>
          <h1>Painel de Controle</h1>
          <button type="button" onClick={handleLogOut}>
            Sair
          </button>
        </Content>
      </Body>
    </Container>
  );
};

export default Dashboard;
