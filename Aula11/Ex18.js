// Atividade 2:

// Crie um programa que tenha um vetor inicial contendo os números de 1 a
// 10, e crie um novo vetor (inicialmente vazio) contendo apenas os números
// ímpares do vetor inicial. Finalmente, imprima esse vetor dos números
// ímpares no console.
// Dica: use um loop for para iterar por cada número no array, use uma
// condicional para verificar quais números são ímpares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosImpares = [];

for (let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 !== 0) {
        numerosImpares.push(numeros[i]);   
    }
}

console.log(numerosImpares);