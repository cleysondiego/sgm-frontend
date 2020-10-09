import React from 'react';
import LoggedHeader from '../../components/LoggedHeader';

import { Container, Body } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <LoggedHeader />
      <Body>
        <p>Cards aqui</p>
      </Body>
    </Container>
  );
};

export default Dashboard;
