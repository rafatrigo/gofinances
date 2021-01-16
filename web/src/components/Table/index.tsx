import React, { useCallback } from 'react';
import { useTransition } from 'react-spring';

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

  const transactionsWithTransition = useTransition(
    transactions,
    transaction => transaction.id,
    {
      from: { zoom: 0, opacity: 0 },
      enter: { zoom: 1, opacity: 1 },
      leave: { zoom: 0, opacity: 0 },
    },
  );

  return (
    <Container>
      <ButtonCreate onClick={showForm}>Nova transação</ButtonCreate>

      <Table>
        <TableHead>
          <span>Título</span>
          <span>Preço</span>
          <span>Categoria</span>
          <span>Data</span>
        </TableHead>
        <TableBody>
          {transactionsWithTransition.map(({ item, props, key }) => (
            <TableRow key={key} style={props}>
              <TableData className="title">{item.title}</TableData>
              <TableData className={item.type}>
                {item.type === 'outcome' && '- '}
                {item.formattedValue}
              </TableData>
              <TableData>{item.category.title}</TableData>
              <TableData>{item.formattedDate}</TableData>
              <ButtonDelete onClick={() => handleDeleteTransaction(item.id)}>
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
