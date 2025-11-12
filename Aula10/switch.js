// const prompt = require("prompt-sync")();

// let nota1 = parseFloat(prompt("Qual a primeira nota? "));
// let nota2 = parseFloat(prompt("Qual a segunda nota? "));
// let media = (nota1 + nota2) / 2;

// if (media < 6) {
//   console.log("REPROVADO!");
// } else {
//   console.log("APROVADO!");
// }

console.log(`
---------- Menu ---------
| 1. Cadastrar Produto  |
| 2. Exibir estoque     |
| 3. Editar produto     |
| 4. Remover Produto    |
| 5. Encontrar produto  |
| 6. sair               |
-------------------------    
    `);

let menu = parseFloat(prompt("Escolha uma opção acima: "));

switch (menu) {
  case 1:
    const prompt = require("prompt-sync")();

    let nota1 = parseFloat(prompt("Qual a primeira nota? "));
    let nota2 = parseFloat(prompt("Qual a segunda nota? "));
    let media = (nota1 + nota2) / 2;

    if (media < 6) {
      console.log("REPROVADO!");
    } else {
      console.log("APROVADO!");
    }
    break;

  case 2:
    console.log("Exibindo produtos... ");
    break;

  case 3:
    console.log("Editando produtos... ");
    break;

  case 4:
    console.log("Removendo produtos... ");
    break;

  case 5:
    console.log("Encontrando produtos... ");
    break;

  case 6:
    console.log("Sair... ");
    break;
  default:
    console.log("Opção inválida.");
}
