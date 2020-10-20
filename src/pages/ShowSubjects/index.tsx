import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { FiPlusCircle, FiTrash } from 'react-icons/fi';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import BackHeader from '../../components/BackHeader';

import { Container, Content } from './styles';

interface Subject {
  id: string;
  url: string;
  file_path_url: string;
  title: string;
}

const ShowSubjects: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const location = useLocation();
  const { addToast } = useToast();
  const history = useHistory();

  const monitoring_id = location.search.replace('?id=', '');

  useEffect(() => {
    const FetchData = async (): Promise<void> => {
      try {
        const response = await api.get<Subject[]>(`subject/${monitoring_id}`);

        setSubjects(response.data);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao ler monitoria',
          description:
            'Ocorreu um erro ao recuperar as informações sobre essa monitoria, por favor, tente novamente!',
        });

        history.push('/monitorings');
      }
    };

    FetchData();
    // eslint-disable-next-line
  }, []);

  const handleDelete = useCallback(
    async (subject: Subject) => {
      try {
        await api.delete<Subject>(`subject/${subject.id}`);

        const subjectsArray = subjects.filter(item => item.id !== subject.id);

        setSubjects(subjectsArray);

        addToast({
          type: 'success',
          title: 'Material deletado com sucesso!',
        });
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao deletar material',
          description:
            'Ocorreu um erro ao deletar o material, por favor, tente novamente!',
        });
      }
    },
    [addToast, subjects],
  );

  const handleCreateSubject = useCallback(() => {
    history.push(`/create_subjects?id=${monitoring_id}`);
  }, [history, monitoring_id]);

  return (
    <Container>
      <BackHeader to="/subjects" />
      <Content>
        <button type="button" onClick={handleCreateSubject}>
          <FiPlusCircle />
        </button>
        <table>
          <tbody>
            <tr>
              <th>Título</th>
              <th>Link</th>
              <th>Arquivo</th>
              <th>Ações</th>
            </tr>
            {subjects.map(subject => (
              <tr key={subject.id}>
                <td>
                  <span>{subject.title}</span>
                </td>
                <td>
                  {subject.url !== null ? (
                    <a
                      href={subject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Clique aqui
                    </a>
                  ) : undefined}
                </td>
                <td>
                  {subject.file_path_url !== null ? (
                    <a
                      href={subject.file_path_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Clique aqui
                    </a>
                  ) : undefined}
                </td>
                <td>
                  <button type="button" onClick={() => handleDelete(subject)}>
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

export default ShowSubjects;
