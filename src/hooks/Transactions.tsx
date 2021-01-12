import React, { useContext, createContext, useCallback, useState } from 'react';

import api from '../services/api';

import formatValue from '../utils/formatValue';

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: string;
  category: { title: string };
  created_at: Date;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

interface CreateTransaction {
  title: string;
  type: string;
  value: string;
  category: string;
}

interface TransactionContextData {
  loadTransactions(): Promise<void>;
  createTransaction(data: CreateTransaction): Promise<void>;
  deleteTransaction(id: string): Promise<void>;
  balance: Balance;
  transactions: Transaction[];
}

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
);

const TransactionProvider: React.FC = ({ children }) => {
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

  const createTransaction = useCallback(
    async ({
      title,
      type,
      value,
      category,
    }: CreateTransaction): Promise<void> => {
      const newTransaction = {
        title,
        value,
        category,
        type,
      };

      await api.post('/transactions', newTransaction);
    },
    [],
  );

  const deleteTransaction = useCallback(async (id: string): Promise<void> => {
    await api.delete(`/transactions/${id}`);
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        loadTransactions,
        createTransaction,
        deleteTransaction,
        balance,
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

function useTransaction(): TransactionContextData {
  const context = useContext(TransactionContext);

  if (!context) {
    throw Error('useTransaction must be used within a TransactionProvider');
  }

  return context;
}

export { TransactionProvider, useTransaction };
