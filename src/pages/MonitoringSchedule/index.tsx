import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Body, Content } from './styles';

const Schedule: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Content>
          <h1>Agenda de Monitorias</h1>
        </Content>
      </Body>
      <Footer />
    </Container>
  );
};

export default Schedule;
