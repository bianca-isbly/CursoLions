//Usando if e else
let numero1 = 20;

if (numero1 == 0) {
  console.log("O número que você digitou é zero!");
} else if (numero1 % 2 == 0) {
  console.log("O número que você digitou é par!");
} else {
  console.log("O número que você digitou é ímpar!");
}

//Usando if e else com prompt
const prompt = require("prompt-sync")();
let numero2 = prompt("Digite um número: ");

if (numero2 == 0) {
  console.log("O número que você digitou é zero!");
} else if (numero2 % 2 == 0) {
  console.log("O número que você digitou é par!");
} else {
  console.log("O número que você digitou é ímpar!");
}
