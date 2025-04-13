function abrirProduto(produtoNome, produtoImagem) {
  // Salvar o nome e a imagem do produto no localStorage
  localStorage.setItem("produtoNome", produtoNome);
  localStorage.setItem("produtoImagem", produtoImagem);
  
  // Redirecionar para a página do produto
  window.location.href = produtoNome.toLowerCase().replace(" ", "") + ".html";
}
