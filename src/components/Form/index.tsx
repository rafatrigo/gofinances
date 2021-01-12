import React, { useCallback, useState } from 'react';

import { Form } from '@unform/web';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

import { useForm } from '../../hooks/Form';
import { useTransaction } from '../../hooks/Transactions';

import Input from '../Input';

import {
  Container,
  FormContainer,
  Background,
  TransactionType,
  CancelOrSubmit,
} from './styles';

interface CreateTransaction {
  title: string;
  type: string;
  value: string;
  category: string;
}

const FormComponent: React.FC = () => {
  const { hideForm } = useForm();
  const { createTransaction, loadTransactions } = useTransaction();

  const [transactionType, setTransactionType] = useState<string>('income');

  const handleSubmit = useCallback(
    async ({ title, value, category }: CreateTransaction): Promise<void> => {
      const type = transactionType;
      const transaction = {
        title,
        value,
        category,
        type,
      };

      createTransaction(transaction);

      hideForm();
    },
    [hideForm, transactionType, createTransaction],
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
