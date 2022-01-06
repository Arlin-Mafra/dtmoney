import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface TransactionsProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  date: string;
}

interface TransactionProviderProps {
  children: ReactNode;
}

type TransactionInputProps = Omit<TransactionsProps, "id" | "date">;

interface TransactionContextData {
  transaction: TransactionsProps[];
  createTransaction: (transaction: TransactionInputProps) => Promise<void>;
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transaction, setTransaction] = useState<TransactionsProps[]>([]);
  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransaction(response.data.transactions))
      .catch((error) => console.log(error));
  }, []);

  async function createTransaction(transactionInput: TransactionInputProps) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      date: new Date(),
    });

    const { transactions } = response.data;

    setTransaction([...transaction, transactions]);
  }
  return (
    <TransactionContext.Provider value={{ transaction, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
