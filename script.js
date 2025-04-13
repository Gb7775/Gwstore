function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function verProduto(nome) {
  alert("Você clicou no " + nome);
}
