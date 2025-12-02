const prompt = require("../Aula13/prompt");
const { baralhos } = require("./data");

function cadastrarBaralho() {
  let nome = prompt("Nome do baralhos: ");
  let id = baralhos.length + 1;
  baralhos.push({nome: nome, id:id});
  console.log("Baralho cadastrado com sucesso!");
}

module.exports = cadastrarBaralho;
