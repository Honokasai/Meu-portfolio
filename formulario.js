document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('formContato').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
    } else if (!email.includes('@')) {
      alert('Email inválido!');
    } else {
      alert('Mensagem enviada com sucesso!');
      this.reset();
    }
  });
});
