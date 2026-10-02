const mostrarSenha = document.getElementById("mostrarSenha");
const senha = document.getElementById("senha");

mostrarSenha.addEventListener("change", () => {
    senha.type = mostrarSenha.checked ? "text" : "password";
});

//

document.addEventListener("keydown", function(event) {
    if (event.key === "F11") {
        event.preventDefault();
    }
});

//

function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === "danielroos117@gmail.com" && senha === "123123") {
        window.location.href = "Forum/Forum";
    }
}