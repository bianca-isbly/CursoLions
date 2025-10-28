//let personagensPrincipais = ['Shrek', 'Fiona', 'Príncipe Encantado'];
//personagensPrincipais.unshift('Burro');
//console.log(personagensPrincipais);

//let minhaMesa = ['Bianca', 'Pedro', 'João', 'Vitória'];
//console.log(`Meu nome é ${minhaMesa[0]}, e meus colegas de mesa são: ${minhaMesa[1]}, ${minhaMesa[2]}, ${minhaMesa[3]}.`);

//teste boletim
const prompt = require('prompt-sync')();

let notas = [];

//pergunta: da pra fazer q a entrada do usuario seja somente numeros diretamente, sem usar 'parseFloat'? 
//e usar a mesma variavel ex. "let bio" que é a mesma pergunta, para todos as entradas de nome de alunos?

let nomeAluno = prompt("Nome do Aluno(a): ");
let ptBr = prompt("Digite a nota da prova de português: ");
let mat = prompt("Digite a nota da prova de matemática: ");
let bio = prompt("Digite a nota da prova de biologia: ");
let fis = prompt("Digite a nota da prova de física: ");
let qui = prompt("Digite a nota da prova de química: ");
let his = prompt("Digite a nota da prova de história: ");
let geo = prompt("Digite a nota da prova de geografia: ");
let fil = prompt("Digite a nota da prova de filosofia: ");
let soc = prompt("Digite a nota da prova de sociologia: ");
let eng = prompt("Digite a nota da prova de inglês: ");
let art = prompt("Digite a nota da prova de artes: ");
let edF = prompt("Digite a nota da prova de educação física: ");

//transformar as entradas do usuário em números p/ usar em contas
nota1 = parseFloat(bio); 
nota2 = parseFloat(art);
nota3 = parseFloat(edF);
nota4 = parseFloat(eng);
nota5 = parseFloat(fil);
nota6 = parseFloat(fis);
nota7 = parseFloat(geo);
nota8 = parseFloat(his);
nota9 = parseFloat(mat);
nota10 = parseFloat(ptBr);
nota11 = parseFloat(qui);
nota12 = parseFloat(soc);

//adc os números no array notas
notas.push(nota1, nota2, nota3, nota4, nota5, nota6, nota7, nota8, nota9, nota10, nota11, nota12);
console.log(`notas das matérias dentro do array 'notas': ${notas}`);
// let soma = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10 + nota11 + nota12);
// console.log(`Pontuação total de todas as disciplinas: ${soma}`);

//média das notas usando arrays
let media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5] + notas[6] + notas[7] + notas[8] + notas[9] + notas[10] + notas[11]) /notas.length;
// let media = soma /12; // outro modo de fazer, usando a let soma na L47.
let numDisciplinas = notas.length;
console.log(`Total de disciplinas: ${numDisciplinas}`);
console.log(`A média do(a) aluno(a) ${nomeAluno} é: ${media.toFixed(2)}`); //.toFixed(2) - para mostrar apenas 2 casas decimais após a vírgula

//inclementando o resultado com if e else
if(media >= 6.50){
    console.log(`Parabéns! o(a) aluno(a) ${nomeAluno} passou para o próximo ano letivo!`);
} else{
    console.log(`Sinto muito, mas o(a) aluno(a) ${nomeAluno} reprovou neste ano letivo!`);
}