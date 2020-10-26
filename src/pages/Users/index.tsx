import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiEdit, FiPlusCircle, FiTrash } from 'react-icons/fi';
import SweetAlert from 'react-bootstrap-sweetalert';

import { useToast } from '../../hooks/toast';
import BackHeader from '../../components/BackHeader';
import api from '../../services/api';

import { Container, Content } from './styles';

interface User {
  id: string;
  name: string;
  user_type: number;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showAlert, setShowAlert] = useState(false);

  const history = useHistory();
  const { addToast } = useToast();

  const userType = ['Monitor', 'Professor', 'Coordenador', 'Secretaria'];

  useEffect(() => {
    const FetchData = async (): Promise<void> => {
      try {
        const response = await api.get<User[]>('users');

        setUsers(response.data);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao ler os usuários',
          description:
            'Ocorreu um erro ao recuperar os usuários, por favor, tente novamente!',
        });

        history.push('/dashboard');
      }
    };

    FetchData();
  }, [addToast, history]);

  const handleCreateUser = useCallback(() => {
    history.push('/create_user');
  }, [history]);

  const handleClick = useCallback(
    (user: User) => {
      history.push(`/show_user?id=${user.id}`);
    },
    [history],
  );

  const handleDelete = useCallback(
    async (user: User) => {
      try {
        setShowAlert(!showAlert);
        await api.delete<User>(`users/${user.id}`);

        const usersArray = users.filter(item => item.id !== user.id);

        setUsers(usersArray);

        addToast({
          type: 'success',
          title: 'Usuário deletado com sucesso!',
        });
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao deletar usuário',
          description:
            'Ocorreu um erro ao deletar o usuário, por favor, tente novamente!',
        });
      }
    },
    [addToast, users, showAlert],
  );

  return (
    <Container>
      <BackHeader title="Usuários" show_profile />
      <Content>
        <button type="button" onClick={handleCreateUser}>
          <FiPlusCircle />
        </button>
        <table>
          <tbody>
            <tr>
              <th>Nome do usuário</th>
              <th>Nível de acesso</th>
              <th>Ações</th>
            </tr>
            {users.map(user => (
              <tr key={user.id}>
                <td>
                  <Link to={`/show_user?id=${user.id}`}>{user.name}</Link>
                </td>
                <td>{userType[user.user_type - 1]}</td>
                <td>
                  <button type="button" onClick={() => handleClick(user)}>
                    <FiEdit />
                  </button>

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
                    title="Deletar Usuário"
                    confirmBtnText="Sim, desejo deletar!"
                    cancelBtnText="Cancelar"
                    confirmBtnBsStyle="danger"
                    onConfirm={() => handleDelete(user)}
                    onCancel={() => setShowAlert(!showAlert)}
                  >
                    Você tem certeza que deseja deletar esse Usuário?
                  </SweetAlert>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
};

export default Users;
