import React from 'react';
import { FiBook, FiLayers, FiList, FiMonitor, FiUsers } from 'react-icons/fi';

import LoggedHeader from '../../components/LoggedHeader';

import { Container, Content, CardLink, CardContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <LoggedHeader />
      <Content>
        <div>
          <h1>SGM - Sistema Gerenciador de Monitorias</h1>
          <span>v1.0.0</span>
          <p>Olá! Bem-vindo a área de gerenciamento de monitorias!</p>
          <p>Esta primeira página é o dashboard! </p>
          <p>
            A partir daqui, você poderá acessar os módulos da aplicação que
            estiverem disponíveis à você!
          </p>
          <p>Sinta-se à vontade para explorar os módulos disponíveis abaixo:</p>
        </div>
        <div>
          <div>
            <CardContainer>
              <CardLink to="/presences">
                <FiLayers />
                <p>Grave a presença de quem participou da monitoria</p>
                <strong>Presenças</strong>
              </CardLink>
            </CardContainer>

            <CardContainer>
              <CardLink to="/subjects">
                <FiBook />
                <p>Acesse os conteúdos extras das monitorias</p>
                <strong>Conteúdos Extras</strong>
              </CardLink>
            </CardContainer>
          </div>
          <div>
            <CardContainer>
              <CardLink to="/monitorings">
                <FiMonitor />
                <p>Controle as monitorias do sistema</p>
                <strong>Monitorias</strong>
              </CardLink>
            </CardContainer>

            <CardContainer>
              <CardLink to="/users">
                <FiUsers />
                <p>Controle o acesso dos usuários do sistema</p>
                <strong>Usuários</strong>
              </CardLink>
            </CardContainer>

            <CardContainer>
              <CardLink to="/reports">
                <FiList />
                <p>Acesse os relatórios sobre as presenças nas monitorias</p>
                <strong>Relatórios</strong>
              </CardLink>
            </CardContainer>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
