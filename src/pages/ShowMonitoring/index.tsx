import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import {
  FiAlertCircle,
  FiCalendar,
  FiEdit,
  FiHome,
  FiInfo,
  FiSave,
} from 'react-icons/fi';

import BackHeader from '../../components/BackHeader';
import Input from '../../components/Input';

import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

import { Container, Content } from './styles';

interface Monitoring {
  id: string;
  name: string;
  isAvailable: boolean;
  room: string;
  schedule: string;
  day: string;
}

const ShowMonitoring: React.FC = () => {
  const [monitoring, setMonitoring] = useState<Monitoring>({} as Monitoring);
  const [inputDisabled, setInputDisabled] = useState(true);

  const formRef = useRef<FormHandles>(null);

  const location = useLocation();
  const history = useHistory();
  const { addToast } = useToast();

  useEffect(() => {
    const monitoring_id = location.search.replace('?id=', '');

    const FetchData = async (): Promise<void> => {
      try {
        const response = await api.get<Monitoring>(
          `monitoring/${monitoring_id}`,
        );

        setMonitoring(response.data);
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
  }, [addToast, location.search, history]);

  const handleSubmit = useCallback(
    async (data: Monitoring) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          isAvailable: Yup.boolean().required('Status é obrigatório'),
          room: Yup.string().required('Sala é obrigatória'),
          schedule: Yup.string().required('Horário é obrigatório'),
          day: Yup.string().required('Dia é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.patch('/monitoring', {
          id: monitoring.id,
          name: data.name,
          isAvailable: data.isAvailable,
          room: data.room,
          schedule: data.schedule,
          day: data.day,
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
    [addToast, history, monitoring.id],
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

  return (
    <Container>
      <BackHeader to="/monitorings" title={monitoring.name} />
      <Content>
        <Form
          ref={formRef}
          initialData={{
            name: monitoring.name,
            isAvailable: monitoring.isAvailable,
            room: monitoring.room,
            schedule: monitoring.schedule,
            day: monitoring.day,
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
          <Input name="name" icon={FiInfo} disabled={inputDisabled} />
          <Input
            name="isAvailable"
            icon={FiAlertCircle}
            disabled={inputDisabled}
          />
          <Input name="room" icon={FiHome} disabled={inputDisabled} />
          <Input name="schedule" icon={FiCalendar} disabled={inputDisabled} />
          <Input name="day" icon={FiCalendar} disabled={inputDisabled} />
        </Form>
      </Content>
    </Container>
  );
};

export default ShowMonitoring;
