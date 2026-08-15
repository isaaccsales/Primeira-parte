const form = document.getElementById("loginforma");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "isaac01" && senha === "12345") {

        // Login correto
        window.location.href = "pag02.html";

    } else {

        // Login incorreto
        mensagem.textContent = "Usuário ou senha incorretos. Digite novamente.";

    }

});