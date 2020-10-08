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

import { Container, Content, AnimatedContainer } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import viacep from '../../services/viacep';

interface SendFormData {
  name: string;
  zip_code: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  email: string;
  phone: string;
  hours_available: string;
  agency: string;
  account: string;
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

interface ViacepResponse {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

const BeAMonitor: React.FC = () => {
  const [monitorings, setMonitorings] = useState<Monitoring[]>([]);
  const [selectedMonitoring, setSelectedMonitoring] = useState<Monitoring>(
    {} as Monitoring,
  );
  const [teacher, setTeacher] = useState<Teacher>({} as Teacher);
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  useEffect(() => {
    const FetchData = async (): Promise<void> => {
      try {
        const response = await api.get('monitoring');

        setMonitorings(response.data);
        setTeacher(response.data[0].teacher);
        setSelectedMonitoring(response.data[0]);
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

  const handleSubmit = useCallback(
    async (data: SendFormData) => {
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

        await api.post('/monitor', {
          monitoring_id: selectedMonitoring.id,
          name: data.name,
          zip_code: data.zip_code,
          street: data.street,
          neighborhood: data.neighborhood,
          city: data.city,
          state: data.state,
          email: data.email,
          phone: data.phone,
          hours_available: data.hours_available,
          agency: data.agency,
          account: data.account,
        });

        addToast({
          type: 'success',
          title: 'Você foi inscrito!',
          description:
            'Parabéns, a sua insrição foi realizada, aguarde a secretaria entrar em contato!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Ocorreu um erro!',
          description:
            'Aconteceu algum erro! Por favor, verifique os dados digitados e tente novamente!',
        });
      }
    },
    [addToast, selectedMonitoring],
  );

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

  const handleBlurZipCode = useCallback(async event => {
    if (!event.target.value) {
      return;
    }

    try {
      const response = await viacep.get<ViacepResponse>(
        `${event.target.value}/json`,
      );

      setStreet(response.data.logradouro);
      setNeighborhood(response.data.bairro);
      setCity(response.data.localidade);
      setState(response.data.uf);
    } catch (err) {
      throw Error(err);
    }
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <AnimatedContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Seja um Monitor</h1>

            <div>
              <select value={selectedMonitoring.id} onChange={handleSelect}>
                {monitorings.map(monitoring => (
                  <option key={monitoring.id} value={monitoring.id}>
                    {monitoring.name}
                  </option>
                ))}
              </select>

              <Input
                name="teacher"
                icon={FiBookOpen}
                placeholder={teacher.name}
                disabled
              />
            </div>

            <div>
              <Input name="name" icon={FiUser} placeholder="Nome Completo" />
            </div>

            <div>
              <Input
                onBlur={handleBlurZipCode}
                name="zip_code"
                icon={FiMapPin}
                placeholder="Cep"
              />

              <Input
                name="street"
                icon={FiMapPin}
                placeholder="Rua"
                value={street}
                onChange={event => setStreet(event.target.value)}
              />
            </div>

            <div>
              <Input
                name="neighborhood"
                icon={FiMapPin}
                placeholder="Bairro"
                value={neighborhood}
                onChange={event => setNeighborhood(event.target.value)}
              />
              <Input
                name="city"
                icon={FiMapPin}
                placeholder="Cidade"
                value={city}
                onChange={event => setCity(event.target.value)}
              />
              <Input
                name="state"
                icon={FiMapPin}
                placeholder="Estado"
                value={state}
                onChange={event => setState(event.target.value)}
              />
            </div>

            <div>
              <Input name="email" icon={FiMail} placeholder="Email" />
              <Input name="phone" icon={FiPhone} placeholder="Contato" />
            </div>

            <div>
              <Input
                name="hours_available"
                icon={FiClock}
                placeholder="Quantidade de horas disponíveis"
              />
            </div>

            <div>
              <Input name="agency" icon={FiDollarSign} placeholder="Agência" />
              <Input
                name="account"
                icon={FiDollarSign}
                placeholder="Conta-Corrente"
              />
            </div>

            <Button type="submit">Cadastrar-se</Button>
          </Form>
        </AnimatedContainer>
      </Content>

      <Footer />
    </Container>
  );
};

export default BeAMonitor;
