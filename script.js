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



async function verificarSenha() {

    const senha = document.getElementById("senha").value;
    const resultado = document.getElementById("resultado");

    try {

        const resposta = await fetch("http://localhost:8080/login", {
            method: "POST",
            body: senha
        });

        const dados = await resposta.json();

        resultado.textContent = dados.mensagem;

    } catch (erro) {

        resultado.textContent = "Erro ao conectar com o aplicativo.";

        console.error(erro);
    }
}







async function verificarSenha() {

    const senha = document.getElementById("senha").value;
    const resultado = document.getElementById("resultado");

    try {

        const resposta = await fetch("http://localhost:8080/login", {
            method: "POST",
            body: senha
        });

        const dados = await resposta.json();

            if (dados.sucesso) {
                
                resultado.textContent = "Senha correta!";
                resultado.style.color = "limegreen";
                window.location.href = "Forum/Forum";

            } 
        else {
            resultado.textContent = "Senha incorreta!";
            resultado.style.color = "red";
        }

    } catch (erro) {
        resultado.textContent = "O aplicativo C++ não está aberto.";
        resultado.style.color = "orange";
    }
}
