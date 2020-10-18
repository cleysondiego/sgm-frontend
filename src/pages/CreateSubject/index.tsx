import React, { ChangeEvent, useCallback, useRef } from 'react';
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

interface FormFileData {
  title: string;
}

const CreateSubject: React.FC = () => {
  const formLinkRef = useRef<FormHandles>(null);
  const formFileRef = useRef<FormHandles>(null);

  const location = useLocation();
  const { addToast } = useToast();
  const history = useHistory();

  const monitoring_id = location.search.replace('?id=', '');

  const handleSubmitLink = useCallback(() => {
    console.log('Handle Submit Link');
  }, []);

  const handleSubmitFile = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      try {
        formFileRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Descrição é obrigatória'),
        });

        await schema.validate(formFileRef.current?.getData(), {
          abortEarly: false,
        });

        let daadsda = {} as FormFileData;

        daadsda = formFileRef.current?.getData();

        console.log(title.title);

        if (e.target?.files) {
          const data = new FormData();

          data.append('subjects', e.target.files[0]);

          await api.patch(`/subject/${monitoring_id}/`);

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
          title: 'Erro na atualização',
          description:
            'Ocorreu um erro ao criar novo usuário, por favor, tente novamente!',
        });
      }
    },
    [addToast, history, monitoring_id],
  );

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

            <Input name="link" icon={FiLink} placeholder="Link" />

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
            />

            <input type="file" id="avatar" />

            <Button type="submit">Salvar Arquivo</Button>
          </Form>
        </div>
      </Content>
    </Container>
  );
};

export default CreateSubject;
