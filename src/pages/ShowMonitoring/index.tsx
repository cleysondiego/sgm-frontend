import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiEdit, FiHome, FiInfo, FiSave } from 'react-icons/fi';

import BackHeader from '../../components/BackHeader';
import Input from '../../components/Input';

import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

import { Container, Content } from './styles';

interface Monitoring {
  id: string;
  monitor_id: string;
  teacher_id: string;
  name: string;
  isAvailable: boolean;
  room: string;
  schedule: string;
  day: string;
}

interface IsAvailable {
  value: 'true' | 'false';
}

interface User {
  id: string;
  name: string;
  avatar_url: string;
}

const ShowMonitoring: React.FC = () => {
  const [teachers, setTeachers] = useState<User[]>([]);
  const [monitors, setMonitors] = useState<User[]>([]);

  const [selectedTeacher, setSelectedTeacher] = useState<User>({} as User);
  const [selectedMonitor, setSelectedMonitor] = useState<User>({} as User);
  const [isAvailable, setIsAvailable] = useState<IsAvailable>({
    value: 'true',
  });

  const [hour, setHour] = useState('');
  const [date, setDate] = useState('');

  const [monitoring, setMonitoring] = useState<Monitoring>({} as Monitoring);
  const [inputDisabled, setInputDisabled] = useState(true);

  const formRef = useRef<FormHandles>(null);

  const location = useLocation();
  const history = useHistory();
  const { addToast } = useToast();

  const monitoring_id = location.search.replace('?id=', '');

  useEffect(() => {
    const FetchData = async (): Promise<void> => {
      try {
        const response = await api.get<Monitoring>(
          `monitoring/${monitoring_id}`,
        );

        setMonitoring(response.data);
        setHour(response.data.schedule);
        setDate(response.data.day);

        const responseTeachers = await api.get<User[]>('users/2');
        const responseMonitors = await api.get<User[]>('users/1');

        setTeachers(responseTeachers.data);
        setMonitors(responseMonitors.data);

        const teacherSelected = responseTeachers.data.find(
          teacher => teacher.id === response.data.teacher_id,
        );

        if (teacherSelected) {
          setSelectedTeacher(teacherSelected);
        }

        const monitorSelected = responseMonitors.data.find(
          monitor => monitor.id === response.data.monitor_id,
        );

        if (monitorSelected) {
          setSelectedMonitor(monitorSelected);
        }
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro ao ler monitoria',
          description:
            'Ocorreu um erro ao recuperar as informações sobre essa monitoria, por favor, tente novamente!',
        });

        history.push('/monitorings');
      }
    };

    FetchData();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = useCallback(
    async (data: Monitoring) => {
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

        const id = monitoring_id;

        const teacher_id = selectedTeacher.id || undefined;
        const monitor_id = selectedMonitor.id || undefined;
        const isAvailableData = isAvailable.value === 'true';

        await api.patch('/monitoring', {
          id,
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
          title: 'Monitoria atualizada!',
          description: 'A monitoria foi atualizada com sucesso!',
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
    [
      addToast,
      history,
      date,
      hour,
      isAvailable.value,
      selectedMonitor.id,
      monitoring_id,
      selectedTeacher.id,
    ],
  );

  const handleEdit = useCallback(() => {
    setInputDisabled(!inputDisabled);

    if (inputDisabled) {
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
  }, [addToast, inputDisabled]);

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
      <BackHeader to="/monitorings" title={monitoring.name} />
      <Content>
        <Form
          ref={formRef}
          initialData={{
            name: monitoring.name,
            room: monitoring.room,
          }}
          onSubmit={handleSubmit}
        >
          <div>
            <button type="button" onClick={handleEdit}>
              <FiEdit />
            </button>

            <button type="submit" disabled={inputDisabled}>
              <FiSave />
            </button>
          </div>

          <div>
            <span>Nome da monitoria:</span>
            <Input
              name="name"
              icon={FiInfo}
              placeholder="Nome da monitoria"
              disabled={inputDisabled}
            />
          </div>

          <div>
            <span>Professor responsável:</span>
            <select
              value={selectedTeacher.id || 'unknow'}
              onChange={handleSelectTeacher}
              disabled={inputDisabled}
            >
              {teachers.map(teacher => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.name}
                </option>
              ))}
              <option value="unknow">Nenhum professor associado</option>
            </select>
          </div>

          <div>
            <span>Monitor responsável:</span>
            <select
              value={selectedMonitor.id || 'unknow'}
              onChange={handleSelectMonitor}
              disabled={inputDisabled}
            >
              {monitors.map(monitor => (
                <option key={monitor.id} value={monitor.id}>
                  {monitor.name}
                </option>
              ))}
              <option value="unknow">Nenhum monitor associado</option>
            </select>
          </div>

          <div>
            <span>Disponibilidade:</span>
            <select
              value={isAvailable.value}
              onChange={handleChangeIsAvailable}
              disabled={inputDisabled}
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </select>
          </div>

          <div>
            <span>Sala:</span>
            <Input
              name="room"
              icon={FiHome}
              placeholder="Sala"
              disabled={inputDisabled}
            />
          </div>

          <div>
            <span>Horário:</span>
            <select
              value={hour}
              onChange={handleSelectHour}
              disabled={inputDisabled}
            >
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
            <span>Dias que está disponível:</span>
            <select
              value={date}
              onChange={handleSelectDay}
              disabled={inputDisabled}
            >
              <option value="Segunda-Feira">Segunda-Feira</option>
              <option value="Terça-Feira">Terça-Feira</option>
              <option value="Quarta-Feira">Quarta-Feira</option>
              <option value="Quinta-Feira">Quinta-Feira</option>
              <option value="Sexta-Feira">Sexta-Feira</option>
              <option value="Sábado">Sábado</option>
              <option value="todosdias">De seg à sab</option>
            </select>
          </div>
        </Form>
      </Content>
    </Container>
  );
};

export default ShowMonitoring;
