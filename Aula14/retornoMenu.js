const prompt = require("../Aula13/prompt");

function retornarMenu() {
    console.log(`
_____________________________________
| Deseja retornar ao Menu principal? |
|                                    |
|       1 - Sim     2 - Não          |   
|                                    |
--------------------------------------        
    `);
    
    let respostaUsuario = parseInt(prompt(" "));

    if (respostaUsuario == 1) {
        const Menu = require(".");
        Menu();
    } else {
        process.exit();
    }
}

module.exports = retornarMenu;