import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import BackHeader from '../../components/BackHeader';

import { Container, Content } from './styles';

interface User {
  id: string;
  name: string;
}

interface Monitoring {
  id: string;
  name: string;
  monitor: User;
  teacher: User;
}

const Subjects: React.FC = () => {
  const [monitorings, setMonitorings] = useState<Monitoring[]>([]);

  const history = useHistory();
  const { addToast } = useToast();
  const { user } = useAuth();

  useEffect(() => {
    const FetchData = async (): Promise<void> => {
      try {
        const response = await api.get<Monitoring[]>('monitoring');

        setMonitorings(response.data);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao ler as monitorias',
          description:
            'Ocorreu um erro ao recuperar as monitorias disponiveis, por favor, tente novamente!',
        });

        history.push('/dashboard');
      }
    };

    FetchData();
  }, [addToast, history]);

  return (
    <Container>
      <BackHeader title="Materiais de apoio" />
      <Content>
        <h1>Selecione uma monitoria para visualizar os conteúdos extras</h1>
        <table>
          <tbody>
            <tr>
              <th>Monitorias</th>
            </tr>
            {monitorings.map(monitoring => {
              // eslint-disable-next-line no-nested-ternary
              return user.user_type === 1 ? (
                monitoring.monitor?.id === user.id ? (
                  <tr key={monitoring.id}>
                    <td>
                      <Link to={`/show_subjects?id=${monitoring.id}`}>
                        {monitoring.name}
                      </Link>
                    </td>
                  </tr>
                ) : undefined
              ) : monitoring.teacher?.id === user.id ? (
                <tr key={monitoring.id}>
                  <td>
                    <Link to={`/show_subjects?id=${monitoring.id}`}>
                      {monitoring.name}
                    </Link>
                  </td>
                </tr>
              ) : undefined;
            })}
          </tbody>
        </table>
      </Content>
    </Container>
  );
};

export default Subjects;
