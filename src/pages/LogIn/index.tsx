import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Body, Content, Form, AnimatedContainer } from './styles';

const LogIn: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Content>
          <AnimatedContainer>
            <h1>Log in</h1>
            <div>
              <Form>
                <h2>E-mail</h2>
                <input />
              </Form>
              <Form>
                <h2>Senha</h2>
                <input />
              </Form>
              <a href="/login">Entrar</a>
            </div>
          </AnimatedContainer>
        </Content>
      </Body>
      <Footer />
    </Container>
  );
};

export default LogIn;
