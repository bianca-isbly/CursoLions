//EXERCÍCIOS - Laço for em JavaScript
//1. Controle de Estoque
//Você tem um array com a quantidade de produtos em estoque:
//let estoque = [12, 0, 5, 8, 0, 3];
//Use um for para percorrer o array e exiba:
//- “Produto X está em falta” se a quantidade for 0
//- “Produto X disponível” caso contrário.
//Dica: use if/else e o índice i para identificar o número do produto.

let estoque = [12, 0, 5, 8, 0, 3];

for (let posicao = 0; posicao < estoque.length; posicao++) {

    if (estoque[posicao]) {
        console.log(`O produto ${posicao} está disponível.`);
    } else {
        console.log(`O produto ${posicao} está em falta.`)
    }

}