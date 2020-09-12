import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Container, FooterStyled, Row, Column, GroupColumn } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterStyled>
        <Row>
          <GroupColumn>
            <Column>
              <h3>Redes Sociais</h3>
              <a
                href="https://www.facebook.com/Fatec-Indaiatuba-140629972732629/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
                Facebook
              </a>
              <a
                href="https://www.youtube.com/channel/UChZP4dkp2IFvLslxm3i_Qdw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
                YouTube
              </a>
              <a
                href="https://www.instagram.com/fatecindaiatuba/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
                Instagram
              </a>
            </Column>
            <Column>
              <h3>Links Úteis</h3>
              <a
                href="http://www.fatec.sp.gov.br/view/Default.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Live
              </a>
              <a
                href="http://moodle.fatecid.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Moodle
              </a>
              <a
                href="https://websai.cps.sp.gov.br/Autenticacao/Default.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Websai
              </a>
            </Column>
          </GroupColumn>
          <GroupColumn>
            <Column>
              <h3>Cursos</h3>
              <a
                href="http://www.fatecid.com.br/site/index.php/analise-de-sistemas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ADS
              </a>
              <a
                href="http://www.fatecid.com.br/site/index.php/comercio-exterior/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comércio Exterior
              </a>
              <a
                href="http://www.fatecid.com.br/site/index.php/gestao-empresarial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gestão Empresarial
              </a>
            </Column>
            <Column>
              <h3>Institucional</h3>
              <a
                href="http://www.fatecid.com.br/site/index.php/aacc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AACC
              </a>
              <a
                href="http://www.fatecid.com.br/site/index.php/programa-de-monitoria-de-disciplina-e-iniciacao-cientifica/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Iniciação Científica
              </a>
              <a
                href="http://www.fatecid.com.br/site/index.php/trabalho-de-graduacao/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trabalhos de Graduação
              </a>
            </Column>
          </GroupColumn>
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
