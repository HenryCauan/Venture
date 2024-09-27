const exploreButton = document.querySelector('.explore');
const section2 = document.querySelector('.section2');

exploreButton.addEventListener('click', () => {
  section2.scrollIntoView({
    behavior: 'smooth', // Adicione uma rolagem suave
    block: 'start' // Vá para o topo da seção 2
  });
});

const explore1Button = document.querySelector('.explore1');
const section = document.querySelector('.section');

explore1Button.addEventListener('click', () => {
  section.scrollIntoView({
    behavior: 'smooth', // Adicione uma rolagem suave
    block: 'start' // Vá para o topo da seção 2
  });
});

const contactButton = document.querySelector('.contact');
const section7 = document.querySelector('.section7');

contactButton.addEventListener('click', () => {
  section7.scrollIntoView({
    behavior: 'smooth', // Adicione uma rolagem suave
    block: 'start' // Vá para o topo da seção 2
  });
});

