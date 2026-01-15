document.addEventListener("DOMContentLoaded", () => {

  // ================================
  // CARROSSEL AUTOMÁTICO (0.9s)
  // ================================
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let index = 0;

  function mostrarSlide(i) {
    slides.forEach(slide => slide.classList.remove("ativo"));
    dots.forEach(dot => dot.classList.remove("ativo"));

    slides[i].classList.add("ativo");
    dots[i].classList.add("ativo");
  }

  if (slides.length > 0) {
    setInterval(() => {
      index = (index + 1) % slides.length;
      mostrarSlide(index);
    }, 900);
  }

  // ================================
  // PRODUTOS (DEMO)
  // ================================
  const produtos = [
    { nome: "Tomate Orgânico", preco: 8.9 },
    { nome: "Alface Crespa", preco: 4.5 },
    { nome: "Cenoura Baby", preco: 6.2 }
  ];

  const listaProdutos = document.getElementById("lista-produtos");

  if (listaProdutos) {
    produtos.forEach(produto => {
      const card = document.createElement("div");
      card.className = "card-produto";

      const botao = document.createElement("button");
      botao.textContent = "Reservar";

      botao.addEventListener("click", () => {
        botao.textContent = "Reservado ✓";
        botao.classList.add("btn-reservado");
        botao.disabled = true;

        mostrarToast();
      });

      card.innerHTML = `
        <h4>${produto.nome}</h4>
        <p>R$ ${produto.preco}</p>
      `;

      card.appendChild(botao);
      listaProdutos.appendChild(card);
    });
  }

  // ================================
  // TOAST DE FEEDBACK
  // ================================
  function mostrarToast() {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.classList.add("mostrar");

    setTimeout(() => {
      toast.classList.remove("mostrar");
    }, 2500);
  }

  // ================================
  // CTA HERO → SCROLL SUAVE
  // ================================
  const btnHero = document.getElementById("btn-hero");

  if (btnHero) {
    btnHero.addEventListener("click", () => {
      document.getElementById("produtos").scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  // ================================
  // NAVBAR MOBILE
  // ================================
  const hamburger = document.getElementById("hamburger");
  const menuMobile = document.getElementById("menu-mobile");

  if (hamburger && menuMobile) {
    hamburger.addEventListener("click", () => {
      menuMobile.classList.toggle("ativo");
    });

    menuMobile.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("click", () => {
        menuMobile.classList.remove("ativo");
      });
    });
  }

});
const modal = document.getElementById("modal-produto");
const fecharModal = document.getElementById("fechar-modal");

function abrirModalProduto(produto) {
  document.getElementById("modal-img").src = produto.img;
  document.getElementById("modal-nome").innerText = produto.nome;
  document.getElementById("modal-tipo").innerText = produto.tipo;
  document.getElementById("modal-preco").innerText = `R$ ${produto.preco}`;
  document.getElementById("modal-desc").innerText = produto.descricao;
  document.getElementById("modal-cultivo").innerText = produto.cultivo;
  document.getElementById("modal-produtor").innerText = produto.produtor;

  modal.classList.add("ativo");
}

fecharModal.addEventListener("click", () => {
  modal.classList.remove("ativo");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("ativo");
});
