// LOGIN
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    window.location.href = "produtor-dashboard.html";
  });
}

// LOGOUT
const logout = document.getElementById("logout");
if (logout) {
  logout.addEventListener("click", () => {
    window.location.href = "produtor-login.html";
  });
}

// PEDIDOS MOCK
const pedidos = [
  { id: 101, cliente: "Ana", produtos: "Tomate x2, Alface", status: "novo" },
  { id: 102, cliente: "Carlos", produtos: "Geleia", status: "preparo" },
  { id: 103, cliente: "Marina", produtos: "Morango x3", status: "entregue" },
  { id: 104, cliente: "João", produtos: "Cenoura", status: "entregue" }
];

const lista = document.getElementById("lista-pedidos");

if (lista) {
  let hoje = 0, preparo = 0, entregues = 0;

  pedidos.forEach(p => {
    if (p.status === "novo") hoje++;
    if (p.status === "preparo") preparo++;
    if (p.status === "entregue") entregues++;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>#${p.id}</td>
      <td>${p.cliente}</td>
      <td>${p.produtos}</td>
      <td><span class="status ${p.status}">${p.status}</span></td>
    `;
    lista.appendChild(tr);
  });

  document.getElementById("qtd-hoje").innerText = hoje;
  document.getElementById("qtd-preparo").innerText = preparo;
  document.getElementById("qtd-entregues").innerText = entregues;
}
