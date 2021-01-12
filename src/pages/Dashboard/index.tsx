import React, { useEffect } from 'react';
import Header from '../../components/Header';

import Form from '../../components/Form';
import CardContainer from '../../components/Card';
import TableContainer from '../../components/Table';
import { useForm } from '../../hooks/Form';
import { useTransaction } from '../../hooks/Transactions';

import { Container, PageContainer } from './styles';

const Dashboard: React.FC = () => {
  const { showFormState } = useForm();
  const { loadTransactions, balance, transactions } = useTransaction();

  useEffect(() => {
    loadTransactions();
  }, [loadTransactions, showFormState, transactions]);

  return (
    <PageContainer>
      {showFormState && <Form />}
      <Header />
      <Container>
        <CardContainer balance={balance} />
        <TableContainer />
      </Container>
    </PageContainer>
  );
};

export default Dashboard;
