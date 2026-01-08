const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let pedidos = [];

app.get("/pedidos", (req, res) => {
  res.json(pedidos);
});

app.post("/pedidos", (req, res) => {
  const pedido = req.body;
  pedidos.push(pedido);
  res.status(201).json({
    mensagem: "Pedido recebido com sucesso",
    pedido,
  });
});

app.listen(3000, () => {
  console.log("🚀 Backend rodando em http://localhost:3000");
});
