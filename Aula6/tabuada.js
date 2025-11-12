const prompt = require("prompt-sync")();

let tabuada = parseFloat(prompt("De qual número você deseja ver a tabuada? "));
let i;

// 0 ao 10
for (i = 0; i <= 10; i = i + 1) {
  console.log(i * tabuada);
}

// De trás para frente. 10 ao 0
//for (i = 10; i >= 0; i = i - 1) {
//    console.log(i*tabuada);
//}

//for (i = 0; i <= 10; i = i + 1) {
//    console.log(i+tabuada);
//}
