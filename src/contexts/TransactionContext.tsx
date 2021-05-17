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

type TransactionInput = Omit<Transaction, 'id' | 'createdAt' | 'type'> & {
  type: string;
};

type TransactionsContextData = {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get<TransactionRequestAPI>('/transactions')
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const { data } = await api.post<Transaction>('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });

    const transaction = data;

    setTransactions([
      ...transactions,
      transaction,
    ]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
