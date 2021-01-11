import React, { useState, useEffect, useCallback } from 'react';
import { FiTrash2 } from 'react-icons/fi';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import api from '../../services/api';

import Header from '../../components/Header';

import formatValue from '../../utils/formatValue';

import {
  Container,
  CardContainer,
  Card,
  TableContainer,
  ButtonDelete,
  Table,
  TableHead,
  TableBody,
  TableData,
  TableRow,
} from './styles';

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  const loadTransactions = useCallback(async (): Promise<void> => {
    const response = await api.get('/transactions');

    const transactionsFormatted = response.data.transactions.map(
      (transaction: Transaction) => ({
        ...transaction,
        formattedValue: formatValue(transaction.value),
        formattedDate: new Date(transaction.created_at).toLocaleDateString(
          'pt-br',
        ),
      }),
    );

    const balanceFormatted = {
      income: formatValue(response.data.balance.income),
      outcome: formatValue(response.data.balance.outcome),
      total: formatValue(response.data.balance.total),
    };

    setTransactions(transactionsFormatted);
    setBalance(balanceFormatted);
  }, []);

  useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  const DeleteTransaction = useCallback(
    async id => {
      await api.delete(`/transactions/${id}`);
      loadTransactions();
    },
    [loadTransactions],
  );

  const handleDeleteTransaction = useCallback(
    async id => {
      setTransactions(state =>
        state.filter(transaction => transaction.id !== id),
      );
      DeleteTransaction(id);
    },
    [DeleteTransaction],
  );

  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Entradas</p>
              <img src={income} alt="Income" />
            </header>
            <h1 data-testid="balance-income">{balance.income}</h1>
          </Card>
          <Card>
            <header>
              <p>Saídas</p>
              <img src={outcome} alt="Outcome" />
            </header>
            <h1 data-testid="balance-outcome">{balance.outcome}</h1>
          </Card>
          <Card total>
            <header>
              <p>Total</p>
              <img src={total} alt="Total" />
            </header>
            <h1 data-testid="balance-total">{balance.total}</h1>
          </Card>
        </CardContainer>

        <TableContainer>
          <Table>
            <TableHead>
              <span>Título</span>
              <span>Preço</span>
              <span>Categoria</span>
              <span>Data</span>
            </TableHead>
            <TableBody>
              {transactions.map(transaction => (
                <TableRow key={transaction.id}>
                  <TableData className="title">{transaction.title}</TableData>
                  <TableData className={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {transaction.formattedValue}
                  </TableData>
                  <TableData>{transaction.category.title}</TableData>
                  <TableData>{transaction.formattedDate}</TableData>
                  <ButtonDelete
                    onClick={() => handleDeleteTransaction(transaction.id)}
                  >
                    <FiTrash2 size={20} color="#e83f5b" />
                  </ButtonDelete>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
