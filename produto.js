// produto.js
function getParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        nome: params.get('nome'),
        img: params.get('img'),
        preco: params.get('preco'),
        desc: params.get('desc')
    };
}

window.onload = () => {
    const { nome, img, preco, desc } = getParams();

    document.getElementById('produto-nome').textContent = nome;
    document.getElementById('produto-img').src = img;
    document.getElementById('produto-img').alt = nome;
    document.getElementById('produto-preco').textContent = preco;
    document.getElementById('produto-desc').textContent = desc;
};
