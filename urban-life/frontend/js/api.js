const API_URL = "http://localhost:3000";

export async function salvarPedido(pedido) {
  await fetch(`${API_URL}/pedidos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pedido),
  });
}

export async function listarPedidos() {
  const response = await fetch(`${API_URL}/pedidos`);
  return response.json();
}
