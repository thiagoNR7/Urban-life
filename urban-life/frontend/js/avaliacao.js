const estrelas = document.querySelectorAll(".avaliacao-estrelas span");
const textoNota = document.getElementById("nota-texto");
const btnEnviar = document.getElementById("enviar-avaliacao");

let notaSelecionada = 0;

const textos = {
  1: "Muito insatisfeito 😞",
  2: "Pode melhorar 😐",
  3: "Bom 🙂",
  4: "Muito bom 😄",
  5: "Excelente! 🌟"
};

estrelas.forEach(star => {
  star.addEventListener("click", () => {
    notaSelecionada = Number(star.dataset.star);

    estrelas.forEach(s => {
      s.classList.toggle(
        "ativa",
        Number(s.dataset.star) <= notaSelecionada
      );
    });

    textoNota.innerText = textos[notaSelecionada];
    btnEnviar.disabled = false;
  });
});

btnEnviar.addEventListener("click", () => {
  alert("Avaliação enviada com sucesso 🌱 Obrigado!");
  window.location.href = "./index.html";
});
