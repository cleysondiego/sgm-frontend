import React, { useCallback, useEffect, useState } from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import BackHeader from '../../components/BackHeader';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

import { Container, Content } from './styles';

interface Monitoring {
  id: string;
  name: string;
}

const Monitoring: React.FC = () => {
  const [monitorings, setMonitorings] = useState<Monitoring[]>([]);

  const history = useHistory();
  const { addToast } = useToast();

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

  const handleClick = useCallback(
    monitoring => {
      history.push(`/show_monitoring?id=${monitoring.id}`);
    },
    [history],
  );

  const handleDelete = useCallback((monitoring: Monitoring) => {
    console.log(`HandleDelete = ${monitoring.name}`);
  }, []);

  return (
    <Container>
      <BackHeader title="Monitorias" />
      <Content>
        <table>
          <tbody>
            <tr>
              <th>Nome da monitoria</th>
              <th>Ações</th>
            </tr>
            {monitorings.map(monitoring => (
              <tr key={monitoring.id}>
                <td>
                  <Link to={`/show_monitoring?id=${monitoring.id}`}>
                    {monitoring.name}
                  </Link>
                </td>
                <td>
                  <button type="button" onClick={() => handleClick(monitoring)}>
                    <FiEdit />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(monitoring)}
                  >
                    <FiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
};

export default Monitoring;
