import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Body, Content, AnimatedContainer } from './styles';

const Monitor: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Content>
          <AnimatedContainer>
            <h1>Seja um Monitor</h1>
          </AnimatedContainer>
        </Content>
      </Body>
      <Footer />
    </Container>
  );
};

export default Monitor;
