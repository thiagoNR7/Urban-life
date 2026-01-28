const LIMITE = 9;
let itensSelecionados = 0;
let produtosSelecionados = [];

const qtdEl = document.getElementById("cestaQtd");
const progressEl = document.getElementById("cestaProgress");
const btnContinuar = document.getElementById("btnContinuar");

// -------------------------
// Atualiza barra da cesta
// -------------------------
function atualizarCesta() {
  qtdEl.innerText = itensSelecionados;
  progressEl.style.width = `${(itensSelecionados / LIMITE) * 100}%`;
  btnContinuar.disabled = itensSelecionados !== LIMITE;
}

// -------------------------
// ADD PRODUTO
// -------------------------
document.querySelectorAll(".btn-add").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".produto-card");
    const nome = card.querySelector("h4").innerText;
    const preco = parseFloat(
      card.querySelector(".preco").innerText.replace("R$", "").replace(",", ".")
    );
    const qtdSpan = card.querySelector(".qtd-produto");

    if (itensSelecionados >= LIMITE) return;

    let produto = produtosSelecionados.find(p => p.nome === nome);

    if (produto) {
      produto.qtd++;
    } else {
      produtosSelecionados.push({ nome, preco, qtd: 1 });
    }

    qtdSpan.innerText = parseInt(qtdSpan.innerText) + 1;
    itensSelecionados++;

    atualizarCesta();
  });
});

// -------------------------
// REMOVE PRODUTO
// -------------------------
document.querySelectorAll(".btn-remove").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".produto-card");
    const nome = card.querySelector("h4").innerText;
    const qtdSpan = card.querySelector(".qtd-produto");
    let qtdAtual = parseInt(qtdSpan.innerText);

    if (qtdAtual === 0) return;

    let produto = produtosSelecionados.find(p => p.nome === nome);
    produto.qtd--;

    if (produto.qtd === 0) {
      produtosSelecionados = produtosSelecionados.filter(p => p.nome !== nome);
    }

    qtdSpan.innerText = qtdAtual - 1;
    itensSelecionados--;

    atualizarCesta();
  });
});

// -------------------------
// CONTINUAR → REVISÃO
// -------------------------
btnContinuar.addEventListener("click", () => {
  if (itensSelecionados !== LIMITE) return;

  sessionStorage.setItem(
    "urbanlife_revisao",
    JSON.stringify(produtosSelecionados)
  );

  window.location.href = "./revisao-cesta.html";
});