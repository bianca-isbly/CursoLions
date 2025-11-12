const prompt = require("prompt-sync")();

let nota1 = prompt("Qual a primeira nota? ");
let nota2 = prompt("Qual a segunda nota? ");
let media = nota1 + nota2 / 2;

if (media <= 6) {
  console.log("REPROVADO!")

} else { 
 console.log("APROVADO!");
}
