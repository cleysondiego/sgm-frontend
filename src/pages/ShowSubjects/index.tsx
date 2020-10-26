import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FiPlusCircle, FiTrash } from 'react-icons/fi';
import SweetAlert from 'react-bootstrap-sweetalert';

import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';
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
  const [showAlert, setShowAlert] = useState(false);

  const location = useLocation();
  const { addToast } = useToast();
  const history = useHistory();
  const { user } = useAuth();

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
        setShowAlert(!showAlert);
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
    [addToast, subjects, showAlert],
  );

  const handleCreateSubject = useCallback(() => {
    history.push(`/create_subjects?id=${monitoring_id}`);
  }, [history, monitoring_id]);

  return (
    <Container>
      <BackHeader to="/subjects" />
      <Content>
        {user.user_type === 3 ||
          (user.user_type === 2 && (
            <button type="button" onClick={handleCreateSubject}>
              <FiPlusCircle />
            </button>
          ))}
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
                  {user.user_type === 3 ||
                    (user.user_type === 2 && (
                      <>
                        <button
                          type="button"
                          onClick={() => setShowAlert(!showAlert)}
                        >
                          <FiTrash />
                        </button>
                        <SweetAlert
                          show={showAlert}
                          warning
                          showCancel
                          title="Deletar Material"
                          confirmBtnText="Sim, desejo deletar!"
                          cancelBtnText="Cancelar"
                          confirmBtnBsStyle="danger"
                          onConfirm={() => handleDelete(subject)}
                          onCancel={() => setShowAlert(!showAlert)}
                        >
                          Você tem certeza que deseja deletar esse material?
                        </SweetAlert>
                      </>
                    ))}
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
