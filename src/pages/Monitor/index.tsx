import React, { useCallback, useEffect, useState } from 'react';
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
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Body, Content, AnimatedContainer } from './styles';
import api from '../../services/api';

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

const Monitor: React.FC = () => {
  const [monitorings, setMonitorings] = useState<Monitoring[]>([]);
  const [selectedMonitoring, setSelectedMonitoring] = useState<Monitoring>(
    {} as Monitoring,
  );
  const [teacher, setTeacher] = useState<Teacher>({} as Teacher);

  useEffect(() => {
    api.get('monitoring').then(response => {
      setMonitorings(response.data);
      setTeacher(response.data[0].teacher);
    });
  }, [monitorings]);

  // const handleSubmit = useCallback(async data => {
  //   const response = await api.post('', data);
  // }, []);

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
            <Form
              onSubmit={() => {
                ('');
              }}
            >
              <h1>Seja um Monitor</h1>

              <div>
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
                  name="professor"
                  icon={FiBookOpen}
                  placeholder={teacher.name}
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
