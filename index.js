//const prompt = require('prompt-sync')()

//const aluno1 = prompt("digite  o nome do aluno 1")

//const aluno2 

//const prompt = require('prompt-sync') ();

//const aluno1 = prompt("Nome do Aluno: ,");
//const aluno2 = prompt("Nome do Aluno: ");
//const aluno3 = prompt("Nome do Aluno: ");
//const aluno4 = prompt("Nome do Aluno: ");
//const aluno5 = prompt("Nome do Aluno: ");
//const aluno6 = prompt("Nome do Aluno: ");
//const aluno7 = prompt("Nome do Aluno: ");
//const aluno8 = prompt("Nome do Aluno: ");
//const aluno9 = prompt("Nome do Aluno: ");
//const aluno10 = prompt("Nome do Aluno: ");

//cconsole.log(aluno1 + aluno2 + aluno3 + aluno4 + aluno5 + aluno6 + aluno7 + aluno8 + aluno9 + aluno10);

//Operações matemáticas

//Adição:
//let soma1 = 10 + 5; 
//let soma2 = 50 + 5;
//console.log(soma1 + soma2);

//subtração:
//let sub1 = 100 - 50;
//let sub2 = 5 - 2;
//console.log(sub1 - sub2);

//multiplicação:
//let multip1 = 5 * 5;
//let multip2 = 8 * 2;
//console.log(multip1 * multip2);

//divisão:
//let div1 = 5 / 2;
//let div2 = 10 / 2;
//console.log(div1 / div2);

//módulo:
//let resto = 10 % 3;
//console.log(resto);

//console.log(soma1 - resto);

////

//Teste: Média de notas dos alunos//

//Puxar arquivos para o usuário preencher
const prompt = require('prompt-sync')();

//Alunos e notas (usuário preenche)
const aluno1 = prompt("Nome do Aluno: ");
let notaMatA1 = prompt("Nota Matemática: ");
let notaBioA1 = prompt("Nota Biologia: ");
let notaFisA1 = prompt("Nota Física: ");

const aluno2 = prompt("Nome do Aluno: ");
let notaMatA2 = prompt("Nota Matemática: ");
let notaBioA2= prompt("Nota Biologia: ");
let notaFisA2= prompt("Nota Física: ");

const aluno3 = prompt("Nome do Aluno: ");
let notaMatA3 = prompt("Nota Matemática: ");
let notaBioA3 = prompt("Nota Biologia: ");
const notaFisA3 = prompt("Nota Física: ");

//Soma das notas dos alunos
console.log(aluno1 + notaMatA1 + notaBioA1 + notaFisA1);
console.log(aluno2 + notaMatA2 + notaBioA2 + notaFisA2);
console.log(aluno3 + notaMatA3 + notaBioA3 + notaFisA3);

//Média das notas
let mediaA1 = (notaMatA1 + notaBioA1 + notaFisA1) / 3;
console.log(`A média do aluno(a) ${aluno1} é: ${mediaA1}`); // método para puxar a informação colocada pelo usuário dentro da frase (ex.: nome do aluno "A média do aluno(a) BIANCA, é:..), usa acentos '' para abrir e fechar a frase e ${dado-que-deseja} para puxar a informação que quer mostrar.
let mediaA2 = (notaMatA2 + notaBioA2 + notaFisA2) / 3;
console.log(`A média do aluno(a) ${aluno2} é: ${mediaA2}`);
let mediaA3 = (notaMatA3 + notaBioA3 + notaFisA3) / 3;
console.log(`A média do aluno(a) ${aluno3} é: ${mediaA1}`);

//Olá {usuário}
const nome = prompt("Preencha seu nome de usuário");
console.log(`Olá ${nome}`);

//uso de if e else
let idadeUsuario = prompt("Quantos anos você tem? ");

if(idadeUsuario >= 18){
    console.log("usuario é MAIOR de 18");
} 
else{
    console.log("usuario é MENOR de 18");
}

const idade = 20;

if(idade >= 18){
    console.log("usuario é MAIOR de 18");
} 
else{
    console.log("usuario é MENOR de 18");
}

let idade2 = 10;

if(idade >= 18){
    console.log("usuario é MAIOR de 18");
} 
else{
    console.log("usuario é MENOR de 18");
}