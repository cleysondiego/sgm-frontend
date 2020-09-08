import React from 'react';
import Header from '../../components/Header';
import { Container, Body, Content } from './styles';
import Footer from '../../components/Footer';
// import api from '../../services/api';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Content>
          <div>
            <h1>O que é monitoria?</h1>
            <p>
              A monitoria é um programa implementado por faculdades e
              universidades com o intuito de melhorar o desempenho do estudante
              e diminuir o nível de reprovações em uma determinada disciplina.
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
            src="https://cdn.pixabay.com/photo/2017/05/03/22/08/book-2282303_1280.png"
            width="600"
            height="600"
          />
        </Content>
      </Body>
      <Footer />
    </Container>
  );
};

export default Home;
