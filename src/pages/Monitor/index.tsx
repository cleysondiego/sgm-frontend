import React from 'react';

import { Form } from '@unform/web';
import {
  FiBookOpen,
  FiClock,
  FiDollarSign,
  FiMail,
  FiMapPin,
  FiPhone,
  FiUser,
} from 'react-icons/fi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Body, Content, AnimatedContainer } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Monitor: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <Content>
          <AnimatedContainer>
            <Form
              onSubmit={() => {
                ('');
              }}
            >
              <h1>Seja um Monitor</h1>

              <div>
                <Input
                  name="disciplina"
                  icon={FiBookOpen}
                  placeholder="Disciplina"
                  disabled
                />

                <Input
                  name="professor"
                  icon={FiBookOpen}
                  placeholder="Professor"
                  disabled
                />
              </div>

              <Input name="Nome" icon={FiUser} placeholder="Nome Completo" />

              <div>
                <Input name="Cep" icon={FiMapPin} placeholder="Cep" />
                <Input name="Rua" icon={FiMapPin} placeholder="Rua" />
              </div>

              <div>
                <Input name="Bairro" icon={FiMapPin} placeholder="Bairro" />
                <Input name="Cidade" icon={FiMapPin} placeholder="Cidade" />
                <Input name="Estado" icon={FiMapPin} placeholder="Estado" />
              </div>

              <div>
                <Input name="Email" icon={FiMail} placeholder="Email" />
                <Input name="Contato" icon={FiPhone} placeholder="Contato" />
              </div>

              <Input
                name="Horas"
                icon={FiClock}
                placeholder="Quantidade de horas disponíveis"
              />

              <div>
                <Input
                  name="Agencia"
                  icon={FiDollarSign}
                  placeholder="Agência"
                />
                <Input
                  name="Conta"
                  icon={FiDollarSign}
                  placeholder="Conta-Corrente"
                />
              </div>

              <Button type="submit">Cadastrar-se</Button>
            </Form>
          </AnimatedContainer>
        </Content>
      </Body>
      <Footer />
    </Container>
  );
};

export default Monitor;
