import React, { useEffect } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api
      .get("transactions")
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 12.000</td>
            <td>Venda</td>
            <td>25/12/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="withdrow">- R$ 12.000</td>
            <td>Aluguel</td>
            <td>25/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
