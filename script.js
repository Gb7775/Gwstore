// Função para abrir a página de produto correspondente
function abrirProduto(nomeProduto, imagemProduto) {
  // Armazena os dados no localStorage
  localStorage.setItem("produtoNome", nomeProduto);
  localStorage.setItem("produtoImagem", imagemProduto);

  // Redireciona para a página do produto
  window.location.href = "produto.html";
}

// Função do menu hamburguer
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}
