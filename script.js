// Função para alternar o menu hamburguer
function toggleMenu() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

// Função para redirecionar para a página de detalhes do produto
function verProduto(produto) {
  if (produto === 'Produto 1') {
    window.location.href = 'https://raw.githubusercontent.com/Gb7775/Gwstore/refs/heads/main/produto1.html'; // Página do Produto 1
  } else if (produto === 'Produto 2') {
    window.location.href = 'produto2.html'; // Página do Produto 2
  } else if (produto === 'Produto 3') {
    window.location.href = 'produto3.html'; // Página do Produto 3
  }
}

// Se o menu estiver ativo, clicar fora do menu fecha o menu (essa função é opcional)
document.addEventListener('click', function(event) {
  var menu = document.getElementById('menu');
  var hamburger = document.querySelector('.hamburger');
  
  if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
    menu.classList.remove('active');
  }
});

// Efetuar o efeito de hover nos cards (opcional, mas ajuda na interação)
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.transition = 'transform 0.2s';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});
