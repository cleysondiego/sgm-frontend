import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiHome, FiInfo } from 'react-icons/fi';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import BackHeader from '../../components/BackHeader';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';

import { Container, Content } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

interface User {
  id: string;
  name: string;
  avatar_url: string;
}

interface IsAvailable {
  value: 'true' | 'false';
}

interface CreateMonitoringFormData {
  name: string;
  teacher_id: string;
  monitor_id: string;
  isAvailable: boolean;
  room: string;
  schedule: string;
  day: string;
}

const CreateMonitoring: React.FC = () => {
  const [teachers, setTeachers] = useState<User[]>([]);
  const [monitors, setMonitors] = useState<User[]>([]);
  const [isAvailable, setIsAvailable] = useState<IsAvailable>({
    value: 'true',
  });
  const [hour, setHour] = useState('06:00');
  const [date, setDate] = useState('alldays');

  const [selectedTeacher, setSelectedTeacher] = useState<User>({} as User);
  const [selectedMonitor, setSelectedMonitor] = useState<User>({} as User);

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();

  useEffect(() => {
    const FetchData = async (): Promise<void> => {
      try {
        const responseTeachers = await api.get<User[]>('users/2');
        const responseMonitors = await api.get<User[]>('users/1');

        setTeachers(responseTeachers.data);
        setMonitors(responseMonitors.data);

        // setSelectedMonitor(responseMonitors.data[0]);
        // setSelectedTeacher(responseTeachers.data[0]);
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao ler os professores e monitores disponiveis',
        });
      }
    };

    FetchData();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = useCallback(
    async (data: CreateMonitoringFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          room: Yup.string(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, room } = data;

        const teacher_id = selectedTeacher.id || undefined;
        const monitor_id = selectedMonitor.id || undefined;
        const isAvailableData = isAvailable.value === 'true';

        await api.post('monitoring', {
          name,
          room,
          teacher_id,
          monitor_id,
          isAvailable: isAvailableData,
          day: date,
          schedule: hour,
        });

        history.push('/monitorings');

        addToast({
          type: 'success',
          title: 'Monitoria criada!',
          description: 'A nova monitoria foi criada com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao criar nova monitoria',
          description:
            'Ocorreu um erro ao riar nova monitoria, cheque o nome da monitoria e tente novamente!',
        });
      }
    },
    [
      addToast,
      date,
      hour,
      isAvailable.value,
      selectedMonitor.id,
      selectedTeacher.id,
      history,
    ],
  );

  const handleSelectTeacher = useCallback(
    event => {
      const teacherSelected = teachers.find(
        teacher => teacher.id === event.target.value,
      );

      if (teacherSelected) {
        setSelectedTeacher(teacherSelected);
        return;
      }

      setSelectedTeacher({} as User);
    },
    [teachers],
  );

  const handleSelectMonitor = useCallback(
    event => {
      const monitorSelected = monitors.find(
        monitor => monitor.id === event.target.value,
      );

      if (monitorSelected) {
        setSelectedMonitor(monitorSelected);
        return;
      }

      setSelectedMonitor({} as User);
    },
    [monitors],
  );

  const handleChangeIsAvailable = useCallback(() => {
    if (isAvailable.value === 'true') {
      setIsAvailable({ value: 'false' });
      return;
    }

    setIsAvailable({ value: 'true' });
  }, [isAvailable.value]);

  const handleSelectHour = useCallback(event => {
    setHour(event.target.value);
  }, []);

  const handleSelectDay = useCallback(event => {
    setDate(event.target.value);
  }, []);

  return (
    <Container>
      <BackHeader title="Criar nova monitoria" to="/monitorings" />
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <span>Digite o nome da monitoria:</span>
            <Input name="name" icon={FiInfo} placeholder="Nome da monitoria" />
          </div>

          <div>
            <span>Selecione o professor responsável:</span>
            <select
              value={selectedTeacher.id || 'unknow'}
              onChange={handleSelectTeacher}
            >
              {teachers.map(teacher => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.name}
                </option>
              ))}
              <option value="unknow">Não associar</option>
            </select>
          </div>

          <div>
            <span>Selecione o monitor responsável:</span>
            <select
              value={selectedMonitor.id || 'unknow'}
              onChange={handleSelectMonitor}
            >
              {monitors.map(monitor => (
                <option key={monitor.id} value={monitor.id}>
                  {monitor.name}
                </option>
              ))}
              <option value="unknow">Não associar</option>
            </select>
          </div>

          <div>
            <span>Já está disponivel?</span>
            <select
              value={isAvailable.value}
              onChange={handleChangeIsAvailable}
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
          </div>

          <div>
            <span>Digite o nome da sala:</span>
            <Input name="room" icon={FiHome} placeholder="Sala" />
          </div>

          <div>
            <span>Selecione o horário:</span>
            <select value={hour} onChange={handleSelectHour}>
              <option value="06:00">06:00</option>
              <option value="07:00">07:00</option>
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
            </select>
          </div>

          <div>
            <span>Selecione os dias que estará disponivel:</span>
            <select value={date} onChange={handleSelectDay}>
              <option value="monday">Segunda-Feira</option>
              <option value="tuesday">Terça-Feira</option>
              <option value="wednesday">Quarta-Feira</option>
              <option value="thursday">Quinta-Feira</option>
              <option value="friday">Sexta-Feira</option>
              <option value="saturday">Sábado</option>
              <option value="alldays">De seg à sab</option>
            </select>
          </div>

          <Button type="submit">Criar nova monitoria</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateMonitoring;
