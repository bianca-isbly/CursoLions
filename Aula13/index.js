const prompt = require("prompt-sync")();
const atualizar = require("./atualizar");
const cadastro = require("./cadastro");
const listar = require("./listar");
const remover = require("./remover");
const usuarios = require("./usuarios");
Menu();
function Menu() {
  let escolhaMenu;

  console.log(`
1 - Cadastrar usuário
2 - Listagem dos Usuários
3 - Atualização de usuário
4 - Remoção de usuário
5 - Sair
`);
  escolhaMenu = parseInt(prompt("Escolha uma opção:"));
  switch (escolhaMenu) {
    case 1:
      cadastro(), Menu();
      break;
    case 2:
      listar(usuarios), Menu();
      break;
    case 3:
      atualizar(), Menu();
      break;
    case 4:
      remover(usuarios), Menu();
    break;
    case 5:
      process.exit();
    default:
      console.log("Comando inválido!\nTente novamente."), Menu();
      break;
  }
}
