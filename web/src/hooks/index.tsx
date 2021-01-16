import React from 'react';

import { FormProvider } from './Form';
import { TransactionProvider } from './Transactions';

const AppProvider: React.FC = ({ children }) => (
  <TransactionProvider>
    <FormProvider>{children}</FormProvider>
  </TransactionProvider>
);

export default AppProvider;
