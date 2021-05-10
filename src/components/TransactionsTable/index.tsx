import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>10/05/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.100,00</td>
            <td>Casa</td>
            <td>10/05/2021</td>
          </tr>
          <tr>
            <td>Parcela Carro</td>
            <td className="withdraw">- R$ 400,00</td>
            <td>Carro</td>
            <td>12/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}