const prompt = require("../Aula13/prompt");
const { baralhos, flashcards } = require("./data");
const listarBaralho = require("./listarBaralhos");

function criarFlashcards() {
  listarBaralho();
  let qualBaralho = parseInt(prompt("Escolha o ID de qual baralho você quer cadastrar o seu flashcard: "));
  
  let pergunta = prompt("Escreva o seu flashcard: ");
  let resposta = prompt("Resposta: ");
  
  flashcards.push({
    pergunta: pergunta,
    resposta: resposta,
    baralhoid: qualBaralho
  });
  console.log("Flashcard cadastrado com sucesso!");
}

module.exports = criarFlashcards;
