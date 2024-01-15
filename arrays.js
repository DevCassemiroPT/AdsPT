/*
let array = [22,41,57,78,85];
let max = Math.max(...array);
console.log(max); 
*/
/*
var nomes = ["Fábio", "Manuel", "Felipe", "Lucas", "Igor"];
var alteracao1 = nomes.splice(0,1, "Alexandre");

//Adc um novo elemento
nomes.unshift("Marcia");
console.log(nomes);

//Localizando um elemento
var index = nomes.indexOf("Lucas");
console.log(index);
*/

//Avançando 
/*
var pessoas = ["Felipe", "Igor", "Alexandre", "Cassemiro","Teodoro", "Nadir"];
var pessoas1 = pessoas.slice(1,4);

console.log(pessoas);
console.log(pessoas1);
*/

//Concatenando
/*
var gerentes = ["Nadia", "Fabiana"];
var empresa = pessoas1.concat(gerentes);
console.log(empresa);
*/

//Exercício - criando um array trimestral
var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
             "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

var Ptrimestre = meses.slice(0,3);
console.log("\nTrismestres de 2024\n")
console.log("1º: " + Ptrimestre + "!\n")

var Strimestre = meses.slice(3,6)
console.log("2º: " + Strimestre + "!\n")

var Ttrimestre = meses.slice(6,9)
console.log("3º: " + Ttrimestre + "!\n")

var Qtrimestre = meses.slice(9,12)
console.log("4º: " + Qtrimestre + "!\n")
