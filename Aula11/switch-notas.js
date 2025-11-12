// console.log(`
// classificação das notas
// A - 90- 100
// b
// c
// d
// f
// `);

// let escolha = prompt(de sua npota)

// switch(escolha){
//     case (escolha >= 90 && escolha <= 100 ):
//     console.log(" sua nota é A");
//      break;
// }

const prompt = require("prompt-sync")();

console.log(`
 _______________________
|CLASSIFICAÇÃO DAS NOTAS|
|90 a 100: "A"          |
|80 a 89:  "B"          |
|70 a 79:  "C"          |
|60 a 69:  "D"          |
|0 a 59:   "F"          |
 -----------------------
`);

let nota = parseFloat(prompt("Qual a nota final? "));

switch (true) {
  case nota >= 90 && nota <= 100: //true
    console.log('Aluno aprovado, média final: "A"');
    break;
  case nota >= 80 && nota <= 89:
    console.log('Aluno aprovado, média final: "B"');
    break;
  case nota >= 70 && nota <= 89:
    console.log('Aluno aprovado, média final: "C"');
    break;
  case nota >= 60 && nota <= 69:
    console.log('Aluno aprovado, média final: "D"');
    break;
  case nota >= 0 && nota <= 59:
    console.log('Aluno REPROVADO, média final: "F"');
    break;
  default:
    console.log("NOTA INVÁLIDA");
    break;
}
