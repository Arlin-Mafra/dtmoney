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
  transactions: TransactionsProps[];
  createTransaction: (transaction: TransactionInputProps) => void;
}

export const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);
  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions))
      .catch((error) => console.log(error));
  }, []);

  function createTransaction(transaction: TransactionInputProps) {
    api.post("/transactions", transaction);
  }
  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
