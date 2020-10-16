import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FiEdit, FiLock, FiMail, FiSave, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import BackHeader from '../../components/BackHeader';

import { Container, Content } from './styles';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/getValidationErrors';

interface User {
  id: string;
  name: string;
  email: string;
  user_type: number;
}

interface UserFormData {
  id: string;
  name: string;
  email: string;
  password: string;
}

const ShowUser: React.FC = () => {
  const [user, setUser] = useState<User>({} as User);
  const [userType, setUserType] = useState(1);
  const [disabled, setDisabled] = useState(true);

  const formRef = useRef<FormHandles>(null);

  const location = useLocation();
  const history = useHistory();
  const { addToast } = useToast();

  const id = location.search.replace('?id=', '');

  useEffect(() => {
    const FetchData = async (): Promise<void> => {
      try {
        const response = await api.get<User>(`show_user/${id}`);

        setUser(response.data);
        setUserType(response.data.user_type);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao ler usuário',
          description:
            'Ocorreu um erro ao recuperar as informações sobre essa monitoria, por favor, tente novamente!',
        });
      }
    };

    FetchData();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = useCallback(
    async (data: UserFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-Mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string(),
          password_confirmation: Yup.string()
            .when('password', {
              is: val => !!val.length,
              then: Yup.string().required('Campo obrigatório'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password')], 'Confirmação incorreta'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, email, password } = data;

        const formData = {
          id,
          name,
          email,
          password: password === '' ? undefined : password,
          user_type: userType,
        };

        await api.patch('users', formData);

        history.push('/users');

        addToast({
          type: 'success',
          title: 'Usuário atualizado!',
          description:
            'As informações desse usuário foi atualizada com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na atualização',
          description:
            'Ocorreu um erro ao criar novo usuário, por favor, tente novamente!',
        });
      }
    },
    [addToast, history, id, userType],
  );

  const handleSelectType = useCallback(event => {
    setUserType(event.target.value);
  }, []);

  const handleEdit = useCallback(() => {
    setDisabled(!disabled);

    if (disabled) {
      addToast({
        type: 'info',
        title: 'Edição habilitada!',
      });

      return;
    }

    addToast({
      type: 'info',
      title: 'Edição desabilitada!',
    });
  }, [addToast, disabled]);

  return (
    <Container>
      <BackHeader to="/users" />
      <Content>
        <Form
          ref={formRef}
          initialData={{
            name: user.name,
            email: user.email,
          }}
          onSubmit={handleSubmit}
        >
          <div>
            <button type="button" onClick={handleEdit}>
              <FiEdit />
            </button>

            <button type="submit" disabled={disabled}>
              <FiSave />
            </button>
          </div>

          <Input
            name="name"
            icon={FiUser}
            placeholder="Nome"
            disabled={disabled}
          />

          <Input
            name="email"
            icon={FiMail}
            placeholder="E-mail"
            disabled={disabled}
          />

          <Input
            name="password"
            icon={FiLock}
            placeholder="Senha"
            type="password"
            disabled={disabled}
          />

          <Input
            name="password_confirmation"
            icon={FiLock}
            placeholder="Confirmar senha"
            type="password"
            disabled={disabled}
          />

          <div>
            <span>Selecione o nível de acesso do usuário:</span>
            <select
              value={userType}
              onChange={handleSelectType}
              disabled={disabled}
            >
              <option value={1}>Monitor</option>
              <option value={2}>Professor</option>
              <option value={3}>Coordenador</option>
              <option value={4}>Secretaria</option>
            </select>
          </div>
        </Form>
      </Content>
    </Container>
  );
};

export default ShowUser;
