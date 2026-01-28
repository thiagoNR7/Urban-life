// ELEMENTOS
const lista = document.getElementById("listaProdutos");
const totalEl = document.getElementById("totalCesta");
const btnContinuar = document.getElementById("btn-ir-checkout");

// BUSCA PRODUTOS DA REVISÃO
let produtos = JSON.parse(
  sessionStorage.getItem("urbanlife_revisao")
) || [];

// RENDERIZA
function renderizarRevisao() {
  lista.innerHTML = "";
  let total = 0;

  if (produtos.length === 0) {
    lista.innerHTML = "<p>Nenhum produto selecionado.</p>";
    totalEl.innerText = "0.00";
    btnContinuar.disabled = true;
    return;
  }

  produtos.forEach((p, index) => {
    total += p.preco * p.qtd;

    const li = document.createElement("li");
    li.className = "item-produto";

    li.innerHTML = `
      <div>
        <strong>${p.nome}</strong>
        <span>${p.qtd}x • R$ ${p.preco.toFixed(2)}</span>
      </div>
      <button class="btn-remover" data-index="${index}">
        Remover
      </button>
    `;

    lista.appendChild(li);
  });

  totalEl.innerText = total.toFixed(2);
  btnContinuar.disabled = false;
}

// REMOVER PRODUTO
lista.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-remover")) {
    const index = e.target.dataset.index;
    produtos.splice(index, 1);

    sessionStorage.setItem(
      "urbanlife_revisao",
      JSON.stringify(produtos)
    );

    renderizarRevisao();
  }
});

// CONTINUAR PARA CHECKOUT
btnContinuar.addEventListener("click", () => {
  if (produtos.length === 0) {
    alert("Sua cesta está vazia 🌱");
    return;
  }

  sessionStorage.setItem(
    "urbanlife_checkout",
    JSON.stringify({
      produtos,
      total: produtos.reduce(
        (s, p) => s + p.preco * p.qtd,
        0
      )
    })
  );

  function selecionarRegiao(regiao) {
  sessionStorage.setItem("urbanlife_regiao", regiao);
  alert(`Região selecionada: ${regiao}`);
}
  window.location.href = "./entrega.html";
});

// INIT
renderizarRevisao();