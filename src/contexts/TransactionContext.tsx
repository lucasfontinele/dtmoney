import { useEffect, useState, createContext, ReactNode } from 'react';

import { api } from '../services/api';

type TransactionRequestAPI = {
  transactions: Transaction[];
};

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: 'deposit' | 'withdraw',
  category: string;
  createdAt: Date;
};

type TransactionProviderProps = {
  children: ReactNode;
};

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get<TransactionRequestAPI>('/transactions')
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
