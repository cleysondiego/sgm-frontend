import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Container, FooterStyled, Row, Column } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterStyled>
        <Row>
          <Column>
            <h3>Redes Sociais</h3>
            <a href="/home">
              <FaFacebookF />
              Facebook
            </a>
            <a href="/home">
              <FaYoutube />
              YouTube
            </a>
            <a href="/home">
              <FaInstagram />
              Instagram
            </a>
          </Column>
          <Column>
            <h3>Links Úteis</h3>
            <a href="/home">Microsoft Live</a>
            <a href="/home">Moodle</a>
            <a href="/home">Websai</a>
          </Column>
          <Column>
            <h3>Cursos</h3>
            <a href="/home">ADS</a>
            <a href="/home">Comércio Exterior</a>
            <a href="/home">Gestão Empresarial</a>
          </Column>
          <Column>
            <h3>Institucional</h3>
            <a href="/home">AACC</a>
            <a href="/home">Iniciação Científica</a>
            <a href="/home">Trabalho de Graduação</a>
          </Column>
        </Row>
        <hr />
        <h5>
          Fatec Indaiatuba - Dr. Archimedes Lamogglia | (19) 3885-1923 | Rua Dom
          Pedro I, 65 - Cidade Nova I | CEP 13334-100
        </h5>
      </FooterStyled>
    </Container>
  );
};

export default Footer;
