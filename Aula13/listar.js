const prompt = require("prompt-sync")();
const forEach = require("for-each");
let usuarios = require("./usuarios");

// function listar(usuarios) {
//    if (usuarios.forEach((usuario) => {
//     })) {
//       console.log(
//         "Listagem de usuários cadastrados:" +
//           "\nID: " +
//           usuario.id +
//           "\nNome: " +
//           usuario.nome +
//           "\nIdade: " +
//           usuario.idade +
//           "\nTelefone: " +
//           usuario.telefone
//       ) } else {
//     console.log("Nenhum usuário cadastrado!");
//   }
// }
// funciona, mas a legebilidade n fica legal por ter muitas chaves.

function listar(usuarios) {
  if (usuarios.length > 0) {
    usuarios.forEach((usuario) => {
      console.log(
        "Listagem de usuários cadastrados:" +
          "\nID: " +
          usuario.id +
          "\nNome: " +
          usuario.nome +
          "\nIdade: " +
          usuario.idade +
          "\nTelefone: " +
          usuario.telefone
      );
    });
  } else {
    console.log("Nenhum usuário cadastrado!");
  }
} // forma clara de escrever esse código.

module.exports = listar;
