import React, { useCallback, useEffect, useState } from 'react';
import { FiEdit, FiPlusCircle, FiTrash } from 'react-icons/fi';
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

        history.goBack();
      }
    };

    FetchData();
  }, [addToast, history]);

  const handleClick = useCallback(
    (monitoring: Monitoring) => {
      history.push(`/show_monitoring?id=${monitoring.id}`);
    },
    [history],
  );

  const handleDelete = useCallback(
    async (monitoring: Monitoring) => {
      try {
        await api.delete<Monitoring>(`monitoring/${monitoring.id}`);

        const monitoringsArray = monitorings.filter(
          item => item.id !== monitoring.id,
        );

        setMonitorings(monitoringsArray);

        addToast({
          type: 'success',
          title: 'Monitoria deletada com sucesso!',
        });
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao deletar monitoria',
          description:
            'Ocorreu um erro ao deletar a monitoria, por favor, tente novamente!',
        });
      }
    },
    [addToast, monitorings],
  );

  const handleCreateMonitoring = useCallback(() => {
    history.push('/create_monitoring');
  }, [history]);

  return (
    <Container>
      <BackHeader title="Monitorias" />
      <Content>
        <button type="button" onClick={handleCreateMonitoring}>
          <FiPlusCircle />
        </button>
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
