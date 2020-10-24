import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiUser } from 'react-icons/fi';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import BackHeader from '../../components/BackHeader';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content } from './styles';

interface PresenceFormData {
  student_registration: string;
}

const Presences: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: PresenceFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          student_registration: Yup.string().required('RA é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('presences', {
          student_registration: data.student_registration,
        });

        history.push('/dashboard');

        addToast({
          type: 'info',
          title: 'Presença registrada!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao atualizar monitoria',
          description:
            'Ocorreu um erro ao atualizar essa monitoria, tente novamente!',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <BackHeader title="Registrar Presença" />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="student_registration"
            icon={FiUser}
            placeholder="Digite o número de RA do aluno"
          />

          <Button type="submit" isLogged>
            Registrar Presença
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Presences;
