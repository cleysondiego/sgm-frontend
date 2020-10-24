import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useToast } from '../../hooks/toast';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content } from './styles';
import api from '../../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface Monitoring {
  id: string;
  name: string;
  isAvailable: boolean;
  room: string;
  schedule: string;
  day: string;
  teacher: User;
  monitor: User;
}

const Schedule: React.FC = () => {
  const [monitorings, setMonitorings] = useState<Monitoring[]>([]);

  const history = useHistory();
  const { addToast } = useToast();

  useEffect(() => {
    const FetchData = async (): Promise<void> => {
      try {
        const response = await api.get<Monitoring[]>('/monitoring');

        setMonitorings(response.data);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao carregar agenda de monitorias',
          description:
            'Ocorreu um erro ao recuperar a agenda monitorias, por favor, tente novamente!',
        });

        history.goBack();
      }
    };

    FetchData();
  }, [addToast, history]);

  return (
    <Container>
      <Header />

      <Content>
        <h1>Agenda de Monitorias</h1>
        <table>
          <tbody>
            <tr>
              <th>Monitoria</th>
              <th>Dia(s)</th>
              <th>Horário</th>
              <th>Sala</th>
              <th>Professor</th>
              <th>Monitor</th>
            </tr>
            {monitorings.map(monitoring => (
              <tr key={monitoring.id}>
                <td>{monitoring.name}</td>
                <td>
                  {monitoring.day === 'todosdias'
                    ? 'Seg à Sex'
                    : monitoring.day}
                </td>
                <td>{monitoring.schedule}</td>
                <td>{monitoring.room}</td>
                <td>{monitoring.teacher.name}</td>
                <td>{monitoring.monitor.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>

      <Footer />
    </Container>
  );
};

export default Schedule;
