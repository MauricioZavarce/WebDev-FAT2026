



for(let i = 1; i <= 10; i++){
    if(i % 2 !== 0){
        continue;
    }
    console.log(i + "impar");
}

/* Funções */

function darBomDia( ){
    console.log("Bom dia! ")
}

darBomDia( );
darBomDia( );

function saudar(nome){
    console.log(`Olá' ${nome}! Bem-vindo(a)!`);
}

let nome_funcao = "Elaine";
console.log("Valor nome " + nome_funcao);

saudar(nome_funcao);
saudar("Teste");

function soma(){
    return 4 + 10;
}

let resultado = somar();
console.log(`A soma é: ${resultado2}`);

// for of percorre listas (array/vetor)
// for in percorre objetos

/* For in */
let pessoa_objeto = {
    nome: "Elaine",
    idade: 25,
    cidade: "Fortaleza"
};

for(let chave in pessoa_objeto ){
    console.log(chave + ": " + pessoa_objeto[chave]);
}
let carro_objeto = {
    modelo: "Corolla",
    marca: "toyota",
    ano: 2022
};

for(let chave in carro_objeto){
    console.log(chave + ": " + carro_objeto["modelo"]);
}

let aluno = {
    nome: "Bruno"
};

