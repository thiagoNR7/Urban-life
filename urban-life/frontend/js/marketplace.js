// =========================
// MARKETPLACE – ACESSO AO PRODUTOR
// =========================

document.querySelectorAll(".card-produtor").forEach(card => {
  card.addEventListener("click", () => {
    const produtorId = card.dataset.produtor;
    window.location.href = `./produtor.html?id=${produtorId}`;
  });
});
