//🧠 Atividade: Gerenciador de Descontos e Frete
//Crie um programa que faça o seguinte:
//Solicite ao usuário o Valor Total da Compra e o Código Promocional (como uma string).
//Verifique a Promoção:
//Se o código for GANHOU15, aplique um desconto de 15% no valor total.
//Se o código for FRETEZERO, o desconto é de 0%, mas o frete será grátis (R$ 20,00 de desconto no frete).
//Calcule o Frete: O frete padrão é de R$ 20,00.
//Calcule o Valor Final: Calcule o valor final que o usuário deve pagar após aplicar o desconto da promoção e o frete.
//🛠️ Sua Tarefa (Passos de Lógica Sequencial e Condicional)
//você só pode usar if, else if, else e operações matemáticas.
//Crie variáveis para armazenar o valor da compra e o código promocional.
//Crie uma variável para o valor do frete (frete = 20).
//Use if/else if/else para verificar o código.
//Dentro de cada bloco if, faça o cálculo do novo valor da compra ou altere a variável frete.
//Imprima o valor final.

const prompt = require('prompt-sync')();

let valorTotalCompra = parseFloat(prompt("Qual foi o valor total da sua compra? "));
let frete = (valorTotalCompra) + 20;
console.log(`O valor da sua compra é de R$ ${valorTotalCompra} mais o frete de R$ 20,00, totalizando o valor de R$ ${frete}`);
let cupom = prompt("Tem um cupom de desconto? (sim/não)");
let cupomsim = prompt("Insira o cupom de desconto: ");
//let cupom15 = []

if(cupom = "sim"){
    console.log(`${cupomsim}`);
} else {
    console.log("Que pena! Em sua próxima compra, use o cupom 'GANHOU15' para 15% de desconto ou 'FRETEZERO' para ganhar frete grátis.");
}