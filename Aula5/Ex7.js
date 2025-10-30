const prompt = require('prompt-sync')();
let valorTotalCompra = parseFloat(prompt("Qual foi o valor total da sua compra? "));
let frete = (valorTotalCompra) + 20;
console.log(`O valor da sua compra é de R$ ${valorTotalCompra} mais o frete de R$ 20, totalizando o valor de R$ ${frete}`);
let cupom = prompt("Tem um cupom de desconto? (sim/não)");
let cupom15 = valorTotalCompra * 0.85;
let freteZero = valorTotalCompra;
let cupomsim;

if(cupom == "s" || cupom == "sim" || cupom == "SIM"){
    cupomsim = prompt("Insira o cupom de desconto: ");
    if(cupomsim == "CUPOM15"){
        console.log(`Parabéns! O valor da sua compra foi de R$ ${valorTotalCompra} para o valor de R$ ${cupom15}.`);
    }
    else if(cupomsim == "FRETEZERO"){
        console.log(`Parabéns! O valor da sua compra é de R$ ${freteZero}`);
    } else {
        console.log("Cupom inválido.");
    }
} else {
    console.log("Que pena! Em sua próxima compra, use o cupom 'GANHOU15' para 15% de desconto ou 'FRETEZERO' para ganhar frete grátis.");
}