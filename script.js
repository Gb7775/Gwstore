function abrirProduto(produtoNome, produtoImagem) {
  // Salvar o nome e a imagem do produto no localStorage
  localStorage.setItem("produto1", produtoNome);
  localStorage.setItem("produtoImagem", produtoImagem);
  
  // Redirecionar para a página do produto
  window.location.href = "produto1.html";
}
