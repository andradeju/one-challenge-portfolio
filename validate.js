//Seu JavaScript de validação aqui


const form = document.querySelector("#contato");
const nameInput = document.querySelector("#nome")
const emailInput = document.querySelector("#email")
const subjectInput = document.querySelector("#assunto")
const messageTextarea = document.querySelector("#mensagem")

addEventListener("submit", (event) => {
  event.preventDefault();

  //verifica se o nome 
  if(nameInput.value === "") {
    alert("Por favor preencha seu nome");
    return;
  }

  if (nameInput.value.length > 50) {
    alert("O nome deve conter no máximo 50 caracteres.");
    return;
}
  //verifica o email
  if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, digite seu email");
    return;
  }
  //verifica o assunto
  if(subjectInput.value === "") {
    alert("Por favor, preencha o assunto");
    return;
  }
  if (subjectInput.value.length > 50) {
    alert("O assunto deve conter no máximo 50 caracteres.");
    return;
}

//verifica o campo mensagem
if(messageTextarea.value === "") {
  alert("Por favor, preencha o campo mensagem");
  return;
}
if (messageTextarea.value.length > 300) {
  alert("O assunto deve conter no máximo 50 caracteres.");
  return;
}
  //se todos os campos estiverem preenchidos envia
  form.submit()
});

// Adicionando um event listener ao botão de enviar para o evento de clique
enviarBtn.addEventListener("click", (event) => {
  event.preventDefault(); 
  form.submit();
});

// função que valida o email
function isEmailValid(email) {

  //regex para valida email
  const emailRegex = new RegExp(
    //usuario12@host.com.br
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );
  if(emailRegex.test(email)) {
    return true;
  }
  return false;
}