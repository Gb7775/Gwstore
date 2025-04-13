// Função para alternar o menu hamburguer
function toggleMenu() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

// Função para redirecionar para a página de detalhes do produto
function verProduto(produto) {
  if (produto === 'CORDÃO CADEADO 7MM') {
    window.location.href = '<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Produto 1 - G&W Store</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <header>
    <div class="logo">G&W Store</div>
    <div class="hamburger" onclick="toggleMenu()">☰</div>
    <nav id="menu">
      <a href="#">Cordões</a>
      <a href="#">Dedeiras</a>
      <a href="#">Pulseiras</a>
    </nav>
  </header>

  <section class="product-detail">
    <h1>Produto 1</h1>
    <img src="https://github.com/Gb7775/Gwstore/blob/main/img/dedeira.png?raw=true" alt="Produto 1" />
    <p><strong>Descrição:</strong> Cordão cadeado 7mm, otimo estilo e acabamento</p>
    <p><strong>Preço:</strong> R$ 99,99</p>
    <button>Comprar</button>
  </section>

  <script>
    function toggleMenu() {
      var menu = document.getElementById('menu');
      menu.classList.toggle('active');
    }
  </script>

</body>
</html>'; // Página do Produto 1
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
