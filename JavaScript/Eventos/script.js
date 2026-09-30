//seleciona o elemento com id 'titulo' e muda o texto para 'manipulei o html com o js'
document.getElementById('titulo').textContent = 'Manipulei o html com o js'
 
//seleciona o primeiro <p> encontrado
const paragrafo = document.querySelector('p')
 
// seleciona o elemento que tem o id 'botao'(nao tem html ainda, so um exemplo)
const botao = document.querySelector('#botao')
 
// seleciona o elemento com a classe 'mensagem-ativo
const alerta = document.querySelector('.mensagem-.ativo')
 
 
//seleciona todos os paragrafos da pagina
const paragrafoo = document.querySelectorAll('p')
 
console.log(paragrafoo.length) //mostra no console a quantidade de paragrafo = 3
console.log(paragrafoo[1].textContent) //mostra o texto do segundo paragrafo
 
//muda a cor de todos os paragrafos para azul.
paragrafoo.forEach(p => {
    p.style.color = 'blue'
})
 
 
//seleciona todos os elementos com a classe 'botao'
const botoes = document.getElementsByClassName('botao')
 
console.log(botoes.length) //mostra no console a quantidade de botao = 3
console.log(botoes[0].textContent) //mostra o texto do primeiro botao = botao1 que é o indice 0
 
//seleciona todas as imagens da pagina
const imagens = document.getElementsByTagName('img')
// aqui temos <img>, mas se tivesse ele pegaria.
 
//funcao que altera o titulo pelo id.
function mudarTitulo() {
    const titulo2 = document.getElementById('titulo2')
    titulo2.textContent = 'Titulo alterado com o textContent em JS'
}
 
//funcao que altera o conteudo da div usando innerHTML
function mostrarAlerta() {
    const msg = document.getElementById('mensagem')
    msg.innerHTML = `
    <h2>Atenção</h2>
`
}
 
// seleciona o botao com id 'btn'
const botao1 = document.getElementById('btn')
 
// adiciona um ouvinte de evento 'click' nesse botao
botao1.addEventListener('click', function(){
    alert('opa, tu clicou garotao') //mostra o alerta na tela
    botao1.textContent = 'valeu cara, cliquei mesmo' //muda o texto do botao
})
 
 
//seleciona o botao com o id 'meu-botao'
const botao2 = document.getElementById('meu-botao') //pega id la do html
botao2.addEventListener('click', () => { //outra forma de escrever a funcao (arrow function)
    alert('clicou')
})
 
//seleciona a div ou section com o id 'caixa'
const caixa = document.getElementById('caixa')
caixa.addEventListener('mouseover', () => { //evento do mouseover (quando passar o mouse por cima, ele vira azul)
    caixa.style.backgroundColor = 'blue'
})
 
 
const caixa1 = document.getElementById('caixa1')
caixa1.addEventListener('mouseout', () => {
    caixa1.style.backgroundColor = 'black'
})
 
const campo = document.getElementById('campo')
campo.addEventListener('input', () => {
    console.log('digitando: ' + campo.value)
})
 
//evento de submit no formulario
document.getElementById('meuFormulario').addEventListener('submit', (e) => {
    e.preventDefault() //impede o comportamento padrao da pagina, que seria recarregar ela
    alert('formulario enviado')
})

