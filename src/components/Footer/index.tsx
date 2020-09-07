import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Container, Row, Column, Title, Link } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Row>
        <Column>
          <Title>Redes Sociais</Title>
          <Link href="/home">
            <FaFacebookF />
            Facebook
          </Link>
          <Link href="/home">
            <FaYoutube />
            YouTube
          </Link>
          <Link href="/home">
            <FaInstagram />
            Instagram
          </Link>
        </Column>
        <Column>
          <Title>Links Úteis</Title>
          <Link href="/home">Microsoft Live</Link>
          <Link href="/home">Moodle</Link>
          <Link href="/home">Websai</Link>
        </Column>
        <Column>
          <Title>Cursos</Title>
          <Link href="/home">ADS</Link>
          <Link href="/home">Comércio Exterior</Link>
          <Link href="/home">Gestão Empresarial</Link>
        </Column>
        <Column>
          <Title>Institucional</Title>
          <Link href="/home">AACC</Link>
          <Link href="/home">Iniciação Científica</Link>
          <Link href="/home">Trabalho de Graduação</Link>
        </Column>
      </Row>
      <hr />
      <h5>
        Fatec Indaiatuba - Dr. Archimedes Lamogglia | (19) 3885-1923 | Rua Dom
        Pedro I, 65 - Cidade Nova I | CEP 13334-100
      </h5>
    </Container>
  );
};

export default Footer;
