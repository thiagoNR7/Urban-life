// =========================
// CARRINHO MARKETPLACE
// =========================

let cart = [];

const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartDrawer = document.getElementById("cart-drawer");
const cartBtn = document.getElementById("cart-btn");
const btnFinalizar = document.getElementById("abrir-entrega");

// -------------------------
// ATUALIZAR UI
// -------------------------
function atualizarCarrinho() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.preco * item.qtd;

    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <strong>${item.nome}</strong>
        <div>
          <button data-i="${index}" data-a="menos">−</button>
          <span>${item.qtd}</span>
          <button data-i="${index}" data-a="mais">+</button>
        </div>
      </div>
      <span>R$ ${(item.preco * item.qtd).toFixed(2)}</span>
    `;
    cartItems.appendChild(li);
  });

  cartCount.innerText = cart.reduce((s, i) => s + i.qtd, 0);
  cartTotal.innerText = total.toFixed(2);

  // salva para o checkout
  localStorage.setItem("urbanlife_cart", JSON.stringify(cart));
}

// -------------------------
// ADICIONAR PRODUTO
// -------------------------
document.querySelectorAll(".btn-card").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".produto-card");
    const nome = card.querySelector("h4").innerText;
    const preco = parseFloat(
      card.querySelector(".preco").innerText.replace("R$", "").replace(",", ".")
    );

    const existente = cart.find(p => p.nome === nome);

    if (existente) {
      existente.qtd++;
    } else {
      cart.push({ nome, preco, qtd: 1 });
    }

    atualizarCarrinho();
  });
});

// -------------------------
// + / -
// -------------------------
cartItems.addEventListener("click", e => {
  const index = e.target.dataset.i;
  const action = e.target.dataset.a;
  if (!action) return;

  if (action === "mais") cart[index].qtd++;
  if (action === "menos") {
    cart[index].qtd--;
    if (cart[index].qtd === 0) cart.splice(index, 1);
  }

  atualizarCarrinho();
});

// -------------------------
// ABRIR / FECHAR CARRINHO
// -------------------------
cartBtn.addEventListener("click", () => {
  cartDrawer.classList.toggle("ativo");
});

// -------------------------
// FINALIZAR → CHECKOUT
// -------------------------
btnFinalizar.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio 🌱");
    return;
  }

  window.location.href = "./checkout.html";
});
