//Seu JavaScript de validação aqui

var btnSubmit = document.querySelector(".formcontato__botao");
var nome = document.querySelector("#nome");
var email = document.querySelector("#email");
var assunto = document.querySelector("#assunto");
var mensagem = document.querySelector("#mensagem");

btnSubmit.addEventListener("click", function(evento) {
    evento.preventDefault();

    console.log(nome.value);
    console.log(email.value);
    console.log(assunto.value);
    console.log(mensagem.value);

    document.querySelector('form').reset();
})
