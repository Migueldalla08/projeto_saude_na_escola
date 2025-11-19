const botaoAgendar = document.getElementById('agendarBtn');
const mensagem = document.getElementById('mensagem');
const form = document.getElementById('consultaForm');

botaoAgendar.addEventListener('click', function () {
  // verifica se o formulário está preenchido certinho
  if (form.checkValidity()) {
    mensagem.style.display = 'block';
  } else {
    // mostra as mensagens de erro padrão do navegador
    form.reportValidity();
  }
});
