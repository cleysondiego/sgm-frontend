import React, { useCallback } from 'react';
import LoggedHeader from '../../components/LoggedHeader';
import { useAuth } from '../../hooks/auth';

import { Container, Body, Content } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  const handleLogOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <LoggedHeader>
        <Body>
          <Content>
            <h1>Painel de Controle</h1>
            <button type="button" onClick={handleLogOut}>
              Sair
            </button>
          </Content>
        </Body>
      </LoggedHeader>
    </Container>
  );
};

export default Dashboard;
