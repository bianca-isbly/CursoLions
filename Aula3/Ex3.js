const prompt = require("prompt-sync")();

let resposta = prompt("Você gosta de café?");

if (resposta == "sim") {
  console.log(`Que bom! Café é maravilhoso!`);
}

if (resposta == "não") {
  console.log(`Tudo bem! Há outras bebidas interessantes também!`);
} else {
  console.log('Apenas responda "sim" ou "não"');
}
