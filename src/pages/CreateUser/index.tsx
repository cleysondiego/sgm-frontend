import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';
import * as Yup from 'yup';

import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';
import BackHeader from '../../components/BackHeader';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

interface CreateUserFormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  user_type: number;
}

const CreateUser: React.FC = () => {
  const [userType, setUserType] = useState(1);

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: CreateUserFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-Mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
          password_confirmation: Yup.string()
            .oneOf([Yup.ref('password')], 'Confirmação incorreta')
            .required('Confirmação de senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, email, password } = data;

        const user_type = Number(userType);

        await api.post('users', {
          name,
          email,
          password,
          user_type,
        });

        history.push('/users');

        addToast({
          type: 'success',
          title: 'Usuário criado!',
          description: 'O novo usuário foi criado com sucesso!',
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
    [addToast, userType, history],
  );

  const handleSelectType = useCallback(event => {
    setUserType(event.target.value);
  }, []);

  return (
    <Container>
      <BackHeader title="Novo usuário" to="/users" show_profile />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />
          <Input
            name="password_confirmation"
            icon={FiLock}
            placeholder="Confirmar senha"
            type="password"
          />

          <div>
            <span>Selecione o nível de acesso do usuário:</span>
            <select value={userType} onChange={handleSelectType}>
              <option value={1}>Monitor</option>
              <option value={2}>Professor</option>
              <option value={3}>Coordenador</option>
              <option value={4}>Secretaria</option>
            </select>
          </div>

          <Button type="submit" isLogged>
            Criar usuário
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateUser;
