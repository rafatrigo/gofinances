import React, { useCallback, useState } from 'react';

import { Form } from '@unform/web';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import { useForm } from '../../hooks/Form';
import Input from '../Input';
import api from '../../services/api';

import {
  Container,
  FormContainer,
  Background,
  TransactionType,
  CancelOrSubmit,
} from './styles';

const FormComponent: React.FC = () => {
  const { hideForm } = useForm();
  const [transactionType, setTransactionType] = useState<string>('income');

  const handleSubmit = useCallback(
    async ({ title, value, category }): Promise<void> => {
      const transaction = {
        title,
        value,
        category,
        type: transactionType,
      };

      await api.post('/transactions', transaction);

      hideForm();
    },
    [hideForm, transactionType],
  );

  const setType = useCallback(value => {
    setTransactionType(value);
  }, []);

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h1>Nova Transação</h1>
          <Input
            name="title"
            type="text"
            placeholder="Título"
            autoCapitalize="word"
          />
          <Input name="value" type="number" placeholder="Valor" />
          <TransactionType transaction={transactionType}>
            <button
              value="income"
              onClick={event => setType(event.currentTarget.value)}
              type="button"
            >
              <img src={income} alt="Income" />
              Income
            </button>
            <button
              value="outcome"
              onClick={event => setType(event.currentTarget.value)}
              type="button"
            >
              <img src={outcome} alt="outcome" />
              Outcome
            </button>
          </TransactionType>
          <Input
            name="category"
            type="text"
            placeholder="Categoria"
            autoCapitalize="word"
          />
          <CancelOrSubmit>
            <button type="button" onClick={hideForm}>
              Cancelar
            </button>
            <button type="submit">Enviar</button>
          </CancelOrSubmit>
        </Form>
      </FormContainer>
      <Background />
    </Container>
  );
};

export default FormComponent;
