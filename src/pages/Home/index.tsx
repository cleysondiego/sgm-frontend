import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import HomeImage from '../../assets/home.png';

import { Container, Body, Content, AnimatedContainer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Content>
          <AnimatedContainer>
            <div>
              <h1>O que é monitoria?</h1>
              <p>
                A monitoria é um programa implementado por faculdades e
                universidades com o intuito de melhorar o desempenho do
                estudante e diminuir o nível de reprovações em uma determinada
                disciplina.
              </p>
              <a
                href="http://www.fatecid.com.br/site/index.php/programa-de-monitoria-de-disciplina-e-iniciacao-cientifica/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba mais
              </a>
            </div>
            <img
              src={HomeImage}
              alt="Book of Knowledge"
              width="600"
              height="600"
            />
          </AnimatedContainer>
        </Content>
      </Body>
      <Footer />
    </Container>
  );
};

export default Home;
