import { useContext } from 'react';

import { format } from 'date-fns';

import { Container } from './styles';

import { TransactionsContext } from '../../contexts/TransactionContext';

export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);

  const formatDate = (date: string | Date): string | Date => {
    try {
      const formattedDate = format(new Date(date), 'dd/MM/yyyy');

      return formattedDate;
    } catch (error) {
      return date;
    }
  };

  return (
    <Container>
      {transactions.length === 0 && (
        <p>Nenhuma transação foi registrada.</p>
      )}
      {transactions.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>
                Título
              </th>
              <th>
                Valor
              </th>
              <th>
                Categoria
              </th>
              <th>
                Data
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === 'withdraw' ? '-' : ''} {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>{formatDate(transaction.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Container>
  );
}