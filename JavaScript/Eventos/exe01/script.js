// exercicio 01 

const botao = document.getElementById("meuBotao");
const paragrafo = document.getElementById("meuParagrafo");

    botao.addEventListener("click", () => {
        paragrafo.textContent = "Texto alterado com JS";
    });