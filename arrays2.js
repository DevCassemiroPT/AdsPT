//Map
var numeros = [1,2,3,4,5,6,7,8,9,10];

var mult = numeros.map(function(valor){
    return valor * 3;
});
console.log(mult);

var loja = [
    {id: 1, nome: "Portátil" , categoria: "Eletrônico"},
    {id: 2, nome: "Auriculares" , categoria: "Eletrônico"},
    {id: 3, nome: "Geladeira" , categoria: "Eletrodoméstico"},
    {id: 4, nome: "Placa de indução" , categoria: "Eletrodoméstico"},
    {id: 5, nome: "Bicicleta" , categoria: "Lazer"},
    {id: 6, nome: "Xbox" , categoria: "Game"},
];
var produto = loja.map(item => item.nome);
console.log(produto);


//Reduce
var numeros = [1,2,3,4,5,6,7,8,9,20];

var tot = numeros.reduce(function(total, numero){
    return total + numero;
}, 0);
console.log(tot + "!");


//ForEach
var a = [2,4,6,8,10];

var tot = 0;
a.forEach(soma => {
    tot += soma;
});
console.log("»" + tot + "«");

//Exercício - Reduce, map e filter
var exer = ["Igor","Isla","Fraga",4,6,8,10];

// Usando 'map' para criar um novo array com números duplicados e strings em letras maiúsculas
var novoArray = exer.map(item => {
  if (typeof item === 'string') {
    return item.toUpperCase();
  } else if (typeof item === 'number') {
    return item * 2;
  } else {
    return item;
  }
});
console.log(novoArray);

// Usando 'filter' para criar um novo array com apenas números
var apenasNumeros = exer.filter(item => typeof item === 'number');
console.log("Somente os números;" + apenasNumeros);

// Usando 'reduce' para somar todos os números
var soma = apenasNumeros.reduce((total, valorAtual) => total + valorAtual, 0);
console.log("Total: " + soma);
