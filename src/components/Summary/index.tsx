import { Container } from "./styles";

import incomeSvg from "../../assets/income.svg";
import outcomeSvg from "../../assets/outcome.svg";
import totalSvg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transaction } = useTransactions();
  console.log(transaction);

  const sumary = transaction.reduce(
    (acc, transations) => {
      if (transations.type === "deposit") {
        acc.deposits += transations.amount;
        acc.total += transations.amount;
      } else {
        acc.withdrows += transations.amount;
        acc.total -= transations.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdrows: 0,
      total: 0,
    }
  );
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSvg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(sumary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeSvg} alt="Saídas" />
        </header>
        <strong>
          -{" "}
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(sumary.withdrows)}
        </strong>
      </div>
      <div className="background-highligth">
        <header>
          <p>Total</p>
          <img src={totalSvg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(sumary.total)}
        </strong>
      </div>
    </Container>
  );
}
