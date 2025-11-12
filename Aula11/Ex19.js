// Atividade 3:

// Semelhante a atividade anterior. Mas desta vez, o vetor inicial terá os
// números: [27, 10, 3, 0, 20, 5, 6, 3].
// Em seguida, adicione mais um número nesse vetor (sua idade por
// exemplo) usando push(numero).
// Depois, criar dois vetores para guardar os ímpares e outro para os pares,
// adicionando da mesma forma que a atividade 2, os pares no vetor dos
// pares, e ímpares no vetor dos ímpares.

let numeros = [27, 10, 3, 0, 20, 5, 6, 3];
numeros.push(23);

let numerosPares = [];
let numerosImpares = [];

for (let i = 0; i < numeros.length; i++) {
    
    if (numeros[i] % 2 === 0) {
        numerosPares.push(numeros[i]);   
    } else {
        numerosImpares.push(numeros[i]);
    }
}

console.log(`Pares: ${numerosPares}`);
console.log(`Ímpares: ${numerosImpares}`);