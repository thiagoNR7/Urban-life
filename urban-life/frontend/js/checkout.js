// ===============================
// CHECKOUT – URBAN LIFE
// ===============================

// carrinho vindo do marketplace
const cart = JSON.parse(localStorage.getItem("urbanlife_cart")) || [];

const resumoItens = document.getElementById("resumo-itens");
const resumoTotal = document.getElementById("resumo-total");
const formEndereco = document.getElementById("form-endereco");

// -------------------------------
// RENDER RESUMO DO PEDIDO
// -------------------------------
function renderResumo() {
  resumoItens.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    resumoItens.innerHTML = "<li>Seu carrinho está vazio 🌱</li>";
    resumoTotal.innerText = "0.00";
    return;
  }

  cart.forEach(item => {
    total += item.preco * item.qtd;

    const li = document.createElement("li");
    li.innerText = `${item.nome} x${item.qtd}`;
    resumoItens.appendChild(li);
  });

  resumoTotal.innerText = total.toFixed(2);
}

// -------------------------------
// SUBMIT DO ENDEREÇO
// -------------------------------
formEndereco.addEventListener("submit", e => {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Seu carrinho está vazio 🌱");
    return;
  }

  // salva endereço (simples, MVP)
  const endereco = {
    rua: formEndereco.querySelectorAll("input")[0].value,
    bairro: formEndereco.querySelectorAll("input")[1].value,
    cidade: formEndereco.querySelectorAll("input")[2].value,
    cep: formEndereco.querySelectorAll("input")[3].value
  };

  localStorage.setItem("urbanlife_endereco", JSON.stringify(endereco));

  // 👉 próxima etapa
  window.location.href = "./pagamento.html";
});
// =========================
// MAPA – TEMPO DINÂMICO
// =========================

const tempo = Math.floor(Math.random() * 10) + 25;
const infoTempo = document.querySelector(".entrega-info");

if (infoTempo) {
  infoTempo.innerHTML = `
    <span>📍 Produtor a <strong>${(Math.random() * 3 + 1).toFixed(1)} km</strong></span>
    <span>⏱️ Chega em cerca de <strong>${tempo} minutos</strong></span>
  `;
}


// INIT
renderResumo();
