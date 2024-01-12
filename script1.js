
 var notas = [5,8,6,2,4,9];
 var soma = 0;

for(pos = 0; pos < notas.length; pos++){
    soma += notas[pos];
}

var media = soma/notas.length;

console.log("A sua média de notas é: " + media + "!")



let nome = prompt("Qual é seu nome ?");
let sobrenome = prompt("Qual é seu sobrenome ?");
let nomeCompleto = nome + " " + sobrenome

console.log("Seja bem vindo(a) " + nomeCompleto + "!");


let array = [22,41,57,78,85];
let max = Math.max(...array);
console.log(max); 

