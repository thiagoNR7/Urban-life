const metodos = document.querySelectorAll(".metodo");
const boxes = document.querySelectorAll(".pagamento-box");
const btn = document.getElementById("confirmar-pagamento");

metodos.forEach(btnMetodo => {
  btnMetodo.addEventListener("click", () => {
    metodos.forEach(m => m.classList.remove("ativo"));
    boxes.forEach(b => b.classList.remove("ativo"));

    btnMetodo.classList.add("ativo");
    document.getElementById(btnMetodo.dataset.metodo).classList.add("ativo");
  });
});

btn.addEventListener("click", () => {
  window.location.href = "./pedido.html";
});
