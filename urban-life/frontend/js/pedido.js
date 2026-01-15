// simulação simples baseada no checkout
const endereco = localStorage.getItem("endereco_entrega") || "Endereço informado";
const tempo = Math.floor(Math.random() * 10) + 25;

document.getElementById("endereco").innerText = endereco;
document.getElementById("tempo").innerText = tempo;
