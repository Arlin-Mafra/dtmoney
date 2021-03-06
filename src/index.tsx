import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transactions: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "teste",
          amount: 6000,
          category: "dev",
          type: "deposit",
          date: "2022-05-01 11:00:00",
        },
        {
          id: 2,
          title: "teste",
          amount: 200,
          category: "compras",
          type: "withdrow",
          date: "2022-05-10 13:00:00",
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transactions");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return this.schema.create("transactions", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
