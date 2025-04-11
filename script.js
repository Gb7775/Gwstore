// Animação simples no carregamento
window.addEventListener('load', () => {
    const header = document.querySelector('header');
    header.style.opacity = '0';
    header.style.transition = 'opacity 1.5s ease-in-out';

    setTimeout(() => {
        header.style.opacity = '1';
    }, 300);
});

// Mensagem no console só pra quem fuça
console.log('%cG&W Store — Estilo é identidade!', 'color: #d4af37; font-size: 16px; font-weight: bold;');