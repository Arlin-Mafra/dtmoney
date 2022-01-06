import { Container } from "./styles";

import incomeSvg from "../../assets/income.svg";
import outcomeSvg from "../../assets/outcome.svg";
import totalSvg from "../../assets/total.svg";
import { TransactionContext } from "../../TransactionContext";
import { useContext } from "react";

export function Summary() {
  const { transaction } = useContext(TransactionContext);
  console.log(transaction);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSvg} alt="Entradas" />
        </header>
        <strong>R$ 1000</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeSvg} alt="Saídas" />
        </header>
        <strong>- R$ 500</strong>
      </div>
      <div className="background-highligth">
        <header>
          <p>Total</p>
          <img src={totalSvg} alt="Total" />
        </header>
        <strong>R$ 500</strong>
      </div>
    </Container>
  );
}
