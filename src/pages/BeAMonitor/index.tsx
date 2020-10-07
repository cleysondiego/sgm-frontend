import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import {
  FiBookOpen,
  FiClock,
  FiDollarSign,
  FiMail,
  FiMapPin,
  FiPhone,
  FiUser,
} from 'react-icons/fi';

import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Body,
  Content,
  AnimatedContainer,
  Separator,
} from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

interface SendFormData {
  email: string;
  password: string;
}

interface Monitoring {
  id: string;
  name: string;
  isAvailable: boolean;
  teacher: {
    id: string;
    name: string;
  };
}

interface Teacher {
  id: string;
  name: string;
}

const BeAMonitor: React.FC = () => {
  const [monitorings, setMonitorings] = useState<Monitoring[]>([]);
  const [selectedMonitoring, setSelectedMonitoring] = useState<Monitoring>(
    {} as Monitoring,
  );
  const [teacher, setTeacher] = useState<Teacher>({} as Teacher);

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  useEffect(() => {
    const FetchData = async (): Promise<void> => {
      try {
        const response = await api.get('monitoring');

        setMonitorings(response.data);
        setTeacher(response.data[0].teacher);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao ler as monitorias disponiveis',
          description:
            'Ocorreu um erro ao recuperar as monitorias disponiveis, por favor, tente novamente mais tarde!',
        });
      }
    };

    FetchData();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = useCallback(async (data: SendFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('É necessário o nome completo'),
        zip_code: Yup.string().required('Cep é obrigatório'),
        street: Yup.string().required('A rua é obrigatória'),
        neighborhood: Yup.string().required('O bairro é obrigatório'),
        city: Yup.string().required('A cidade é obrigatória'),
        state: Yup.string().required('O estado é obrigatório'),
        email: Yup.string().required('O E-mail é obrigatório'),
        phone: Yup.string().required(
          'É necessário algum telefone para contato',
        ),
        hours_available: Yup.string().required(
          'É necessário selecionar quantas horas disponíveis você possui',
        ),
        agency: Yup.string().required('A agência é obrigatória'),
        account: Yup.string().required('A conta é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // CALL API
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }

      // ADD TOAST
    }
  }, []);

  const handleSelect = useCallback(
    event => {
      const monitoringSelected = monitorings.find(
        monitoring => monitoring.id === event.target.value,
      );

      if (monitoringSelected) {
        setSelectedMonitoring(monitoringSelected);
        setTeacher(monitoringSelected?.teacher);
      }
    },
    [monitorings],
  );

  return (
    <Container>
      <Header />
      <Body>
        <Content>
          <AnimatedContainer>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Seja um Monitor</h1>

              <Separator>
                <div>
                  <select value={selectedMonitoring.id} onChange={handleSelect}>
                    {monitorings.map(monitoring => (
                      <option key={monitoring.id} value={monitoring.id}>
                        {monitoring.name}
                      </option>
                    ))}
                  </select>
                </div>

                <Input
                  name="teacher"
                  icon={FiBookOpen}
                  placeholder={teacher.name}
                  disabled
                />
              </Separator>

              <Separator>
                <Input name="name" icon={FiUser} placeholder="Nome Completo" />
              </Separator>

              <Separator>
                <Input name="zip_code" icon={FiMapPin} placeholder="Cep" />
                <Input name="street" icon={FiMapPin} placeholder="Rua" />
              </Separator>

              <Separator>
                <Input
                  name="neighborhood"
                  icon={FiMapPin}
                  placeholder="Bairro"
                />
                <Input name="city" icon={FiMapPin} placeholder="Cidade" />
                <Input name="state" icon={FiMapPin} placeholder="Estado" />
              </Separator>

              <Separator>
                <Input name="email" icon={FiMail} placeholder="Email" />
                <Input name="phone" icon={FiPhone} placeholder="Contato" />
              </Separator>

              <Separator>
                <Input
                  name="hours_available"
                  icon={FiClock}
                  placeholder="Quantidade de horas disponíveis"
                />
              </Separator>

              <Separator>
                <Input
                  name="agency"
                  icon={FiDollarSign}
                  placeholder="Agência"
                />
                <Input
                  name="account"
                  icon={FiDollarSign}
                  placeholder="Conta-Corrente"
                />
              </Separator>

              <Button type="submit">Cadastrar-se</Button>
            </Form>
          </AnimatedContainer>
        </Content>
      </Body>
      <Footer />
    </Container>
  );
};

export default BeAMonitor;
