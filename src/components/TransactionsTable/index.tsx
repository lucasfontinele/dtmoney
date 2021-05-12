import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: 'deposit' | 'outcome',
  category: string;
  createdAt: Date;
};

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(({ data }) => setTransactions(data));
  }, []);

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
                <td>Desenvolvimento de website</td>
                <td className="deposit">R$ 12.000,00</td>
                <td>Desenvolvimento</td>
                <td>10/05/2021</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Container>
  );
}