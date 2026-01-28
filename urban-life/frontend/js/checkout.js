const entrega = JSON.parse(sessionStorage.getItem("urbanlife_entrega"));
const revisao = JSON.parse(sessionStorage.getItem("urbanlife_revisao"));

if (!entrega || !revisao) {
  window.location.href = "./entrega.html";
}

document.getElementById("resumo-regiao").innerText = entrega.regiao;
document.getElementById("resumo-dia").innerText = entrega.dia;
document.getElementById("resumo-frete").innerText = entrega.frete.toFixed(2);

let totalProdutos = revisao.reduce(
  (s, p) => s + p.preco * p.qtd,
  0
);

const totalFinal = totalProdutos + entrega.frete;
document.getElementById("resumo-total").innerText = totalFinal.toFixed(2);

document.getElementById("form-checkout").addEventListener("submit", e => {
  e.preventDefault();

  sessionStorage.setItem(
    "urbanlife_checkout_final",
    JSON.stringify({
      entrega,
      produtos: revisao,
      total: totalFinal
    })
  );

  window.location.href = "./pagamento.html";
});