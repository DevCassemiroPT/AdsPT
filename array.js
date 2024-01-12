/*
let array = [22,41,57,78,85];
let max = Math.max(...array);
console.log(max); 
*/

var nomes = ["Fábio", "Manuel", "Felipe", "Lucas", "Igor"]
var alteracao1 = nomes.splice(0,1, "Alexandre")

//Adc um novo elemento
nomes.unshift("Marcia")
console.log(nomes)

//Localizando um elemento
var index = nomes.indexOf("Lucas");
console.log(index)
