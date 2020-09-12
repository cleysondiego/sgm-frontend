import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Body, Content, AnimatedContainer } from './styles';

const Schedule: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Content>
          <AnimatedContainer>
            <h1>Agenda de Monitorias</h1>
            <table>
              <tr>
                <th />
                <th>Segunda-Feira</th>
                <th>Terça-Feira</th>
                <th>Quarta-Feira</th>
                <th>Quinta-Feira</th>
                <th>Sexta-Feira</th>
                <th>Sábado</th>
              </tr>
              <tr>
                <td>18:00</td>
                <td>
                  Matemática
                  <br />
                  <br />
                  Canal 5
                </td>
                <td>
                  Inglês
                  <br />
                  <br />
                  Canal 8
                </td>
                <td>
                  Lógica de Programação
                  <br />
                  <br />
                  Canal 2
                </td>
                <td>
                  Contabilidade
                  <br />
                  <br />
                  Canal 7
                </td>
                <td>
                  Programação em Microinformática
                  <br />
                  <br />
                  Canal 1
                </td>
                <td>
                  Ética e Responsabilidade
                  <br />
                  <br />
                  Canal 3
                </td>
              </tr>
              <tr>
                <td>18:30</td>
                <td>
                  Ética e Responsabilidade
                  <br />
                  <br />
                  Canal 3
                </td>
                <td>
                  Lógica de Programação
                  <br />
                  <br />
                  Canal 2
                </td>
                <td>
                  Contabilidade
                  <br />
                  <br />
                  Canal 7
                </td>
                <td>
                  Matemática
                  <br />
                  <br />
                  Canal 5
                </td>
                <td>
                  Programação em Microinformática
                  <br />
                  <br />
                  Canal 1
                </td>
                <td>
                  Inglês
                  <br />
                  <br />
                  Canal 8
                </td>
              </tr>
            </table>
          </AnimatedContainer>
        </Content>
      </Body>
      <Footer />
    </Container>
  );
};

export default Schedule;
