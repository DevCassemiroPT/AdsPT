
var notas = [5,8,6,2,4,9];
var soma = 0;

for(pos = 0; pos < notas.length; pos++){
   soma += notas[pos];
}

var media = soma/notas.length;

console.log("A sua média de notas é: " + media + "!")