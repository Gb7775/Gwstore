const params = new URLSearchParams(window.location.search);
const nome = params.get('nome');
const img = params.get('img');
const desc = params.get('desc');

document.getElementById('nome-produto').innerText = nome;
document.getElementById('img-produto').src = img;
document.getElementById('desc-produto').innerText = desc;