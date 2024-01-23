//Função
//Exemplo 1
 function multiplicar (x,y){
    return x * y;
 }
var a = multiplicar (5,5);
console.log("Exemplo 1: " + a);

var b = multiplicar (8,45);
console.log("Exemplo 1: " + b);

//Exemplo 2
function somaValores (a, b = 10, c = 10){
    var total = a + b + c;
    return total
}
var s = somaValores(8);
console.log("Exemplo 2: " + s);

var f = somaValores(10,2,8)
console.log("Exemplo 2: " + f);


//Função anônima
//Exemplo 3
var anon = function(a,b,c){
    return a + b + c;
}
console.log("\nExemplo 3: " + anon(5,10,10));


//Arrow function
//Exemplo 4
const sub = (num1, num2) => {
    return num1 - num2;
}
console.log("\nExemplo 4: " + sub(40,15));

//Exemplo 5 + Map
const numeros = [1,2,3,4,5];
const valores = numeros.map((num) => num * 5);
console.log("Exemplo 5: " + valores);

//Exemplo 6 + map + charAt(0) para pegar a 1º letra) + toUpperCase + splice (cortando o elemento)
var produtos = ["geladeira", "air fryer", "mesa de jantar"];
var produtosEmMaiuscula = produtos.map(primeiraEmMaiuscula);

function primeiraEmMaiuscula (elemento) {
    return elemento.charAt(0).toUpperCase() + elemento.slice(1);
}
console.log("Exemplo 6: " + produtosEmMaiuscula);

