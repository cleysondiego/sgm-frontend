import React, { useCallback, useRef } from 'react';

import { Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, AnimatedContainer } from './styles';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';

interface ForgotFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ForgotFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-mail é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/password/forgot', { email: data.email });

        addToast({
          type: 'success',
          title: 'Sucesso!',
          description:
            'Link para a recuperação de senha foi enviado para o seu e-mail!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao recuperar senha',
          description:
            'Por favor, verifique o e-mail digitado e tente novamente!',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Header />

      <Content>
        <AnimatedContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recuperação de senha</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Button type="submit">Recuperar senha</Button>

            <Link to="/login">Voltar para o Login</Link>
          </Form>
        </AnimatedContainer>
      </Content>

      <Footer />
    </Container>
  );
};

export default ForgotPassword;
