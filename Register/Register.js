const mostrarSenha = document.getElementById("ShowHide");
const senha = document.getElementById("pass");

mostrarSenha.addEventListener("change", () => {
    senha.type = mostrarSenha.checked ? "text" : "password";
});


document.addEventListener("keydown", function(event) {
    if (event.key === "F11") {
        event.preventDefault();
    }
});
