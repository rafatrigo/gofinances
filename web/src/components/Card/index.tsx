import React from 'react';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import { Container, Card } from './styles';

import { useTransaction } from '../../hooks/Transactions';

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

interface CardProps {
  balance: Balance;
}

const CardContainer: React.FC<CardProps> = () => {
  const { balance } = useTransaction();

  return (
    <Container>
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
    </Container>
  );
};

export default CardContainer;
