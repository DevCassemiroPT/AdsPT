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