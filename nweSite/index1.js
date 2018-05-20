const enviar = document.querySelector('#form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
enviar.addEventListener('submit', function (e) {
  e.preventDefault();
  if ((nome.checkValidity()==true)&&(email.checkValidity()==true)){
    window.location = 'index.html';
  }
});

const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
      Envio.adiciona('respostas', {
        nome: form.nome.value,
        email: form.email.value
      });
      form.reset();
      e.preventDefault();
    });