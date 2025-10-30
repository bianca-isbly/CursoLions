const prompt = require('prompt-sync')();
let valorTotalCompra = parseFloat(prompt("Qual foi o valor total da sua compra? "));
let frete = (valorTotalCompra) + 20;
console.log(`O valor da sua compra é de R$ ${valorTotalCompra} mais o frete de R$ 20, totalizando o valor de R$ ${frete}`);
let cupom = prompt("Tem um cupom de desconto? (sim/não)");
let cupom15 = valorTotalCompra * 0.85;
let freteZero = valorTotalCompra;
let cupomsim;
let nTentivas;

if(cupom == "s" || cupom == "sim" || cupom == "SIM"){
    for (nTentivas = 3; nTentivas > 0; nTentivas = nTentivas - 1) {
        cupomsim = prompt("Insira o cupom de desconto: ");
        if(cupomsim == "CUPOM15"){
            console.log(`Parabéns! O valor da sua compra foi de R$ ${valorTotalCompra} para o valor de R$ ${cupom15}.`);
            break;
        }
        else if(cupomsim == "FRETEZERO"){
            console.log(`Parabéns! O valor da sua compra é de R$ ${freteZero}`);
            break;
        } else {
            console.log(`Cupom inválido. Número de tentivas: ${nTentivas - 1}`);
        }
    }   
} else{
    console.log("Que pena! Em sua próxima compra, use o cupom 'GANHOU15' para 15% de desconto ou 'FRETEZERO' para ganhar frete grátis.");
}