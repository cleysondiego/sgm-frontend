import React from 'react';
import { Link } from 'react-router-dom';

import LoggedHeader from '../../components/LoggedHeader';

import { Container, Body } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <LoggedHeader />
      <Body>
        <Link to="/monitorings">Monitorias</Link>
        <Link to="/presences">Presenças</Link>
        <Link to="/users">Users</Link>
      </Body>
    </Container>
  );
};

export default Dashboard;
