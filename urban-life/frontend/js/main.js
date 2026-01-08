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

setInterval(() => {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
}, 900);

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

    card.innerHTML = `
      <h4>${produto.nome}</h4>
      <p>R$ ${produto.preco}</p>
      <button>Reservar</button>
    `;

    listaProdutos.appendChild(card);
  });
}
