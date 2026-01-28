function selecionarRegiao(regiao, dia) {
  const entrega = {
    regiao,
    dia,
    frete: regiao === "Centro" ? 8 : 6
  };

  sessionStorage.setItem(
    "urbanlife_entrega",
    JSON.stringify(entrega)
  );

  window.location.href = "./checkout.html";
}