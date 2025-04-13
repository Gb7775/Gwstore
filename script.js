// Efeito de rolagem suave nos links do menu
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});

// Animações de entrada para elementos ao rolar a página
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeInUp');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Funcionalidade do formulário de newsletter
const newsletterForm = document.querySelector('.newsletter form');
newsletterForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const emailInput = newsletterForm.querySelector('input[type="email"]');
  const email = emailInput.value;

  if (email) {
    alert('Inscrição realizada com sucesso!');
    emailInput.value = ''; // Limpar o campo de email
  } else {
    alert('Por favor, insira um email válido.');
  }
});
