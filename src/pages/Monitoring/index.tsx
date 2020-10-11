import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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

  return (
    <Container>
      <BackHeader title="Monitorias" />
      <Content>
        {monitorings.map(monitoring => (
          <button
            type="button"
            key={monitoring.id}
            onClick={() => handleClick(monitoring)}
          >
            {monitoring.name}
          </button>
        ))}
      </Content>
    </Container>
  );
};

export default Monitoring;
