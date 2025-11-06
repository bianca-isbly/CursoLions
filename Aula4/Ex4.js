const prompt = require("prompt-sync")();

let nome = prompt("Como é seu apelido? ");
let idade = prompt("Qual a sua idade? ");
let idadeAte18 = 18 - idade;
let anoNasc = 2025 - idade;

if (idade >= 18) {
  console.log(`${nome}, você é maior de idade, parabéns!`);
} else {
  console.log(
    `${nome}, você é menor de idade... Volte daqui ${idadeAte18} anos.`
  );
}

if (idade >= 18) {
  console.log(`Você nasceu no ano de ${anoNasc}, né? :)`);
}
