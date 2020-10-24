import React, { ChangeEvent, useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiFile, FiLink } from 'react-icons/fi';
import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';

import { useToast } from '../../hooks/toast';
import BackHeader from '../../components/BackHeader';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content } from './styles';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

interface FormLinkData {
  title: string;
  url: string;
}

const CreateSubject: React.FC = () => {
  const [fileTitle, setFileTitle] = useState('');
  const [file, setFile] = useState({} as File);

  const formLinkRef = useRef<FormHandles>(null);
  const formFileRef = useRef<FormHandles>(null);

  const location = useLocation();
  const { addToast } = useToast();
  const history = useHistory();

  const monitoring_id = location.search.replace('?id=', '');

  const handleSubmitLink = useCallback(
    async (data: FormLinkData) => {
      try {
        formLinkRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Título é obrigatório'),
          url: Yup.string().required('Url é obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { title, url } = data;

        await api.post('subject', {
          title,
          monitoring_id,
          url,
        });

        history.goBack();

        addToast({
          type: 'success',
          title: 'Material adicionado com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formLinkRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao criar novo material',
          description:
            'Ocorreu um erro ao criar novo material, por favor, tente novamente!',
        });
      }
    },
    [addToast, history, monitoring_id],
  );

  const handleSubmitFile = useCallback(async () => {
    try {
      formFileRef.current?.setErrors({});

      const schema = Yup.object().shape({
        title: Yup.string().required('Descrição é obrigatória'),
      });

      await schema.validate(formFileRef.current?.getData(), {
        abortEarly: false,
      });

      if (file) {
        const data = new FormData();

        data.append('subjects', file);

        await api.patch(`/subject/${monitoring_id}/${fileTitle}`, data);

        history.goBack();

        addToast({
          type: 'success',
          title: 'Material adicionado com sucesso!',
        });
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formFileRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro ao criar novo material',
        description:
          'Ocorreu um erro ao criar novo material, por favor, tente novamente!',
      });
    }
  }, [addToast, history, monitoring_id, fileTitle, file]);

  const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }, []);

  return (
    <Container>
      <BackHeader to="/subjects" title="Adicionar Material" />
      <Content>
        <div>
          <Form ref={formLinkRef} onSubmit={handleSubmitLink}>
            <h1>Adicionar Link</h1>

            <Input
              name="title"
              icon={FiLink}
              placeholder="Descrição do Material"
            />

            <Input name="url" icon={FiLink} placeholder="Link" />

            <Button type="submit">Salvar Link</Button>
          </Form>
        </div>
        <div>
          <Form ref={formFileRef} onSubmit={handleSubmitFile}>
            <h1>Adicionar Arquivo</h1>

            <Input
              name="title"
              icon={FiFile}
              placeholder="Descrição do Material"
              onChange={event => setFileTitle(event.target.value)}
            />

            <input type="file" id="avatar" onChange={handleFileChange} />

            <Button type="submit" isLogged>
              Salvar Arquivo
            </Button>
          </Form>
        </div>
      </Content>
    </Container>
  );
};

export default CreateSubject;
