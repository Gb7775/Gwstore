// Script de E-commerce - G&W

// Função para adicionar ao carrinho
function adicionarAoCarrinho(produto) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Verificar se o produto já existe no carrinho
    const produtoExistente = carrinho.find(item => item.id === produto.id);
    
    if (produtoExistente) {
        produtoExistente.quantidade++;
    } else {
        produto.quantidade = 1;
        carrinho.push(produto);
    }
    
    // Salvar o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    // Atualizar o contador do carrinho na UI
    atualizarCarrinho();
}

// Função para atualizar o carrinho
function atualizarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const contadorCarrinho = document.getElementById('contador-carrinho');
    contadorCarrinho.textContent = carrinho.length;
}

// Função para exibir o carrinho
function exibirCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoDiv = document.getElementById('carrinho');
    carrinhoDiv.innerHTML = '';

    if (carrinho.length === 0) {
        carrinhoDiv.innerHTML = '<p>Carrinho vazio</p>';
    } else {
        carrinho.forEach(item => {
            carrinhoDiv.innerHTML += `
                <div>
                    <h4>${item.nome} - Quantidade: ${item.quantidade}</h4>
                    <p>Preço: R$ ${item.preco}</p>
                </div>
            `;
        });
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    atualizarCarrinho();
});
