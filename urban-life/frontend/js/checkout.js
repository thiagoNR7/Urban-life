// ============================
// CHECKOUT – RESUMO + ENTREGA
// ============================

// SIMULA carrinho (depois liga com marketplace)
const carrinho = JSON.parse(localStorage.getItem("urbanlife_cart")) || [
  { nome: "Tomate Agroecológico", qtd: 2, preco: 12.5 },
  { nome: "Geleia Artesanal", qtd: 1, preco: 18 }
];

const resumoItens = document.getElementById("resumo-itens");
const resumoTotal = document.getElementById("resumo-total");

const modal = document.getElementById("modal-entrega");
const tempoEntrega = document.getElementById("tempo-entrega");

const form = document.getElementById("checkout-form");
const btnEditar = document.getElementById("editar-endereco");
const btnConfirmar = document.getElementById("confirmar-pedido");

// ----------------------------
// RENDER RESUMO
// ----------------------------
function renderResumo() {
  resumoItens.innerHTML = "";
  let total = 0;

  carrinho.forEach(item => {
    total += item.preco * item.qtd;

    const li = document.createElement("li");
    li.textContent = `${item.nome} x${item.qtd}`;
    resumoItens.appendChild(li);
  });

  resumoTotal.textContent = total.toFixed(2);
}

renderResumo();

// ----------------------------
// SUBMIT ENDEREÇO
// ----------------------------
form.addEventListener("submit", e => {
  e.preventDefault();

  // tempo fake (depois vira cálculo real)
  const tempo = Math.floor(Math.random() * 10) + 25;
  tempoEntrega.textContent = tempo;

  modal.classList.add("ativo");
});

// ----------------------------
// EDITAR
// ----------------------------
btnEditar.addEventListener("click", () => {
  modal.classList.remove("ativo");
});

// ----------------------------
// CONFIRMAR
// ----------------------------
btnConfirmar.addEventListener("click", () => {
  modal.classList.remove("ativo");
  localStorage.removeItem("urbanlife_cart");
  alert("Pedido confirmado com sucesso 🌱");
  window.location.href = "./index.html";
});
