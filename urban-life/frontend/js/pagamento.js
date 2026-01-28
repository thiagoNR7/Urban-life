

// =========================
// PAGAMENTO – UX SIMPLES
// =========================

const opcoes = document.querySelectorAll(".opcao");
const btnConfirmar = document.getElementById("confirmar-pagamento");
const resumoItens = document.getElementById("resumo-itens");
const resumoTotal = document.getElementById("resumo-total");

// carrega carrinho do checkout
const cart = JSON.parse(sessionStorage.getItem("urbanlife_checkout")) || [];

// resumo
let total = 0;
cart.forEach(item => {
  total += item.preco * item.qtd;

  const li = document.createElement("li");
  li.innerText = `${item.nome} x${item.qtd}`;
  resumoItens.appendChild(li);
});

resumoTotal.innerText = total.toFixed(2);

// seleção método
opcoes.forEach(opcao => {
  opcao.addEventListener("click", () => {
    opcoes.forEach(o => o.classList.remove("ativo"));
    opcao.classList.add("ativo");
  });
});

// confirmar
btnConfirmar.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Carrinho vazio");
    return;
  }

  // limpa tudo
  sessionStorage.removeItem("urbanlife_checkout");

  window.location.href = "./pedido.html";
});
