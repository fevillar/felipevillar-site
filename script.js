// Seleciona o formulário e a área de mensagem
const formulario = document.getElementById("form-contato");
const mensagemStatus = document.getElementById("mensagem-status");

// Função para validar e-mail
function emailValido(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Evento de envio do formulário
formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  // Captura os valores digitados
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // Verifica se os campos estão preenchidos
  if (nome === "" || email === "" || mensagem === "") {
    mensagemStatus.textContent = "Por favor, preencha todos os campos.";
    mensagemStatus.style.color = "red";
    return;
  }

  // Verifica se o e-mail tem formato válido
  if (!emailValido(email)) {
    mensagemStatus.textContent = "Por favor, informe um e-mail válido.";
    mensagemStatus.style.color = "red";
    return;
  }

  // Simulação de envio bem-sucedido
  mensagemStatus.textContent = "Mensagem enviada com sucesso!";
  mensagemStatus.style.color = "green";

  // Limpa os campos do formulário
  formulario.reset();
});