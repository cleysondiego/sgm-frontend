import React, { useCallback, useRef } from 'react';

import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiLock, FiMail } from 'react-icons/fi';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';

import { Container, Content, AnimatedContainer } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const LogIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Digite um e-mail válido')
            .required('E-Mail é obrigatório'),
          password: Yup.string().required('Senha é obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Header />

      <Content>
        <AnimatedContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Entrar</Button>

            <a href="/forgot">Esqueci minha senha</a>
          </Form>
        </AnimatedContainer>
      </Content>

      <Footer />
    </Container>
  );
};

export default LogIn;
