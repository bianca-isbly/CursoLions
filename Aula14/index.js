const atualizarBaralho = require("./atualizacaoBaralho");
const cadastrarBaralho = require("./baralho");
const { baralhos, flashcards } = require("./data");
const criarFlashcards = require("./flashcards");
const listarBaralho = require("./listarBaralhos");
const removerBaralho = require("./removerBaralho");
const prompt = require("prompt-sync")();

function Menu() {
  let escolhaMenu;

  console.log(`

Menu Principal:
_____________________________________________________________________________________________
|1 - Cadastrar baralho       | 5 - Criar flashcard          | 0 - Sair/Cancelar             |
|2 - Listar baralhos         | 6 - Listar flashcards        |                               |
|3 - Atualização de baralho  | 7 - Atualização de flashcard |                               |
|4 - Remoção de baralho      | 8 - Remoção de flashcard     |                               |
---------------------------------------------------------------------------------------------
`);
  escolhaMenu = parseInt(prompt("Escolha uma opção:"));
  switch (escolhaMenu) {
    case 1:
      cadastrarBaralho(), Menu();
      break;
    case 2:
      listarBaralho(), Menu();
      break;
    case 3:
      atualizarBaralho(), Menu();
      break;
    case 4:
      removerBaralho(baralhos), Menu();
      break;
    case 5:
      criarFlashcards(flashcards), Menu();
      break;
    case 0:
      console.log("Programa encerrado.");
      process.exit();
    default:
      console.log("Comando inválido!\nTente novamente."), Menu();
      break;
  }
}

module.exports = Menu;
Menu();

// finalizando os flashcards 15-12-25