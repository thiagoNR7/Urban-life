const etapas = document.querySelectorAll(".timeline li");
const botao = document.getElementById("acao-final");

let etapaAtual = 0;

function avancarEtapa() {
  if (etapaAtual < etapas.length) {
    etapas[etapaAtual].classList.add("ativo");
    etapaAtual++;
  }

  if (etapaAtual === etapas.length) {
    botao.disabled = false;
    botao.innerText = "Pedido entregue 🎉 Avaliar produtor";
    window.location.href = "./avaliacao.html";
  }
}

// inicia
avancarEtapa();

// avança automaticamente
const intervalo = setInterval(() => {
  avancarEtapa();
  if (etapaAtual === etapas.length) clearInterval(intervalo);
}, 3000);
