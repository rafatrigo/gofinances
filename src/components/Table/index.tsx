import React, { useCallback } from 'react';

import { FiTrash2 } from 'react-icons/fi';

import { useTransaction } from '../../hooks/Transactions';
import { useForm } from '../../hooks/Form';

import {
  Container,
  ButtonDelete,
  Table,
  TableHead,
  TableBody,
  TableData,
  TableRow,
  ButtonCreate,
} from './styles';

const TableContainer: React.FC = () => {
  const {
    deleteTransaction,
    loadTransactions,
    transactions,
  } = useTransaction();
  const { showForm } = useForm();

  const handleDeleteTransaction = useCallback(
    async (id: string) => {
      deleteTransaction(id);
      loadTransactions();
    },
    [deleteTransaction, loadTransactions],
  );

  return (
    <Container>
      <ButtonCreate onClick={showForm}>Criar nova transação</ButtonCreate>

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
    </Container>
  );
};

export default TableContainer;
