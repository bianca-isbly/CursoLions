//2. Soma de Números Pares
//Crie um array com 10 números inteiros.
//Percorra com um for e calcule a soma apenas dos números pares.
//Dica: use o operador % para verificar se o número é par (num % 2 === 0).

let num = [10, 15, 30, 45, 50, 65, 70, 85, 90, 105];
let soma = 0;
let resto;

for (let i = 0; i < num.length; i = i + 1) {
    
    if (num[i] % 2 == 0) {
        soma = soma + num[i];
        console.log(`A soma dos números pares é ${soma}`);
    } else{
        resto = num[i];
        console.log(`O número ${resto} é ímpar, não é possível somá-lo.`);
    }
    
}
// para printar os últimos dois resultados e deixar a lógica (for) "escondida".
//console.log(`A soma dos números pares é ${soma}`);
//console.log(`O número ${resto} é ímpar, não é possível somá-lo.`);