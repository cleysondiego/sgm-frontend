import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Body, Content } from './styles';

const LogIn: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Content>
          <h1>Log in</h1>
        </Content>
      </Body>
      <Footer />
    </Container>
  );
};

export default LogIn;
