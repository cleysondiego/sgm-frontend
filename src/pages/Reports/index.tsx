import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import BackHeader from '../../components/BackHeader';

import { Container, Content } from './styles';

interface Reports {
  monitoring: string;
  presences: number;
}

const Reports: React.FC = () => {
  const [reports, setReports] = useState<Reports[]>([]);

  const history = useHistory();
  const { addToast } = useToast();

  useEffect(() => {
    const FetchData = async (): Promise<void> => {
      try {
        const response = await api.get<Reports[]>('/reports/all');

        setReports(response.data);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao ler o relatório',
          description:
            'Ocorreu um erro ao recuperar as informações do relatório, por favor, tente novamente!',
        });

        history.goBack();
      }
    };

    FetchData();
  }, [addToast, history]);

  return (
    <Container>
      <BackHeader title="Relatórios de Presenças" />
      <Content>
        <table>
          <tbody>
            <tr>
              <th>Monitoria</th>
              <th>Número de presenças</th>
            </tr>
            {reports.map(report => (
              <tr key={report.monitoring}>
                <td>
                  <span>{report.monitoring}</span>
                </td>
                <td>
                  <span>{report.presences}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
};

export default Reports;
