function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function abrirProduto1() {
  window.location.href = "produto.html?nome=Produto 1&img=https://via.placeholder.com/400x400";
}

function abrirProduto2() {
  window.location.href = "produto.html?nome=Produto 2&img=https://via.placeholder.com/400x400";
}

function abrirProduto3() {
  window.location.href = "produto.html?nome=Produto 3&img=https://via.placeholder.com/400x400";
}
