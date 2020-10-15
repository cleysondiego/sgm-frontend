import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { FiEdit, FiPlusCircle, FiTrash } from 'react-icons/fi';
import { useToast } from '../../hooks/toast';
import BackHeader from '../../components/BackHeader';

import { Container, Content } from './styles';
import api from '../../services/api';

interface User {
  id: string;
  name: string;
  user_type: number;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const history = useHistory();
  const { addToast } = useToast();

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
    console.log('Handle Create User');
  }, []);

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
                <td>{user.name}</td>
                <td>{user.user_type}</td>
                <td>
                  <button type="button">
                    <FiEdit />
                  </button>

                  <button type="button">
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

export default Users;
