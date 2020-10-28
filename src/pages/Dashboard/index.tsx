import React, { useEffect, useState } from 'react';
import { FiBook, FiLayers, FiList, FiMonitor, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import LoggedHeader from '../../components/LoggedHeader';
import { useAuth } from '../../hooks/auth';

import { Container, Content, CardContainer } from './styles';

const Dashboard: React.FC = () => {
  const [presenceDisabled, setPresenceDisabled] = useState(false);
  const [subjectsDisabled, setSubjectsDisabled] = useState(false);
  const [monitoringsDisabled, setMonitoringsDisabled] = useState(false);
  const [usersDisabled, setUsersDisabled] = useState(false);
  const [reportsDisabled, setReportsDisabled] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    switch (user.user_type) {
      case 1:
        setUsersDisabled(true);
        setReportsDisabled(true);
        setMonitoringsDisabled(true);
        break;
      case 2:
        setPresenceDisabled(true);
        setMonitoringsDisabled(true);
        setUsersDisabled(true);
        setReportsDisabled(true);
        break;
      case 3:
        setPresenceDisabled(true);
        setUsersDisabled(true);
        setReportsDisabled(true);
        setSubjectsDisabled(true);
        break;
      case 4:
        setPresenceDisabled(true);
        setSubjectsDisabled(true);
        break;
      default:
        setUsersDisabled(false);
        setReportsDisabled(false);
        setMonitoringsDisabled(false);
        setSubjectsDisabled(false);
        setPresenceDisabled(false);
        break;
    }
  }, [user.user_type]);

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
            <CardContainer disabled={presenceDisabled}>
              <Link to="/presences">
                <FiLayers />
                <p>Grave a presença de quem participou da monitoria</p>
                <strong>Presenças</strong>
              </Link>
            </CardContainer>

            <CardContainer disabled={subjectsDisabled}>
              <Link to="/subjects">
                <FiBook />
                <p>Acesse os conteúdos extras das monitorias</p>
                <strong>Conteúdos Extras</strong>
              </Link>
            </CardContainer>
          </div>
          <div>
            <CardContainer disabled={monitoringsDisabled}>
              <Link to="/monitorings">
                <FiMonitor />
                <p>Controle as monitorias do sistema</p>
                <strong>Monitorias</strong>
              </Link>
            </CardContainer>

            <CardContainer disabled={usersDisabled}>
              <Link to="/users">
                <FiUsers />
                <p>Controle o acesso dos usuários do sistema</p>
                <strong>Usuários</strong>
              </Link>
            </CardContainer>

            <CardContainer disabled={reportsDisabled}>
              <Link to="/reports">
                <FiList />
                <p>Acesse os relatórios sobre as presenças nas monitorias</p>
                <strong>Relatórios</strong>
              </Link>
            </CardContainer>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
