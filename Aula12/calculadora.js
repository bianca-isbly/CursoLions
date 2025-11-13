const prompt = require("prompt-sync")();

const somar = require("./soma.js");
const sub = require("./subtracao.js");
const multip = require("./multiplicacao.js");
const div = require("./divisao.js");
const porc = require("./porcentagem.js");

let primeiroNum = parseFloat(
  prompt("Escolha o primeiro número para calcular: ")
);
let segundoNum = parseFloat(prompt("Escolha o segundo número para calcular: "));
let resultado;
let operacaoEscolhida = prompt(`
_____________________________
|Escolha uma operação básica |
|       +  -  *  /  %        |
------------------------------
`);

// if (operacaoEscolhida === "+") {
//   // soma
//   resultado = primeiroNum + segundoNum;
// } else if (operacaoEscolhida === "-") {
//   // subtração
//   resultado = primeiroNum - segundoNum;
// } else if (operacaoEscolhida === "*") {
//   // multip.
//   resultado = primeiroNum * segundoNum;
// } else if (operacaoEscolhida === "%") {
//   // porcent.
//   resultado = (primeiroNum * segundoNum) / 100;
// } else if (operacaoEscolhida === "/") {
//   // divisão
//   if (segundoNum === 0) {
//     // se pedir por 0
//     resultado = "Inválido: divisão por zero";
//   } else {
//     resultado = primeiroNum / segundoNum;
//   }
// } else {
//   resultado = "Operação inválida"; // qualquer coisa fora numero
// }

switch (operacaoEscolhida) {
  case "+":
    resultado = somar(primeiroNum, segundoNum);
    break;
  case "-":
    resultado = sub(primeiroNum, segundoNum);
    break;
  case "*":
    resultado = multip(primeiroNum, segundoNum);
    break;
  case "/":
    if (segundoNum === 0) {
      console.log("Inválido! Não divisível por 0.");
      break;
    } 
    resultado = div(primeiroNum, segundoNum);
    break;
  case "%":
    resultado = porc(primeiroNum, segundoNum);
    break;
  default:
    resultado = "OPeração inválida!";
    break;
}

console.log(`
____________________________
       CALCULADORA        
Resultado = ${resultado}
----------------------------
`);
