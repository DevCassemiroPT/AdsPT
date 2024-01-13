//Filter - Métodos de realizar

var numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// 1º Inline
var pares = numeros.filter(par => par% 2 == 0);
console.log(pares + ".\n");

// 2º Função dentro do filter
var maiores5 = numeros.filter(
    function(valor){
        return valor > 17;
    }
);
console.log(maiores5 + ".\n");

// 3º Função fora e depois usar o filter
function menor5(valor){
   return valor < 8;
};
var numerosEncontrados = numeros.filter(menor5);
console.log(numerosEncontrados + ".\n");

//4º Função anônima
var r1 = numeros.filter((valor) => {
    return valor > 14;
});
console.log(r1 + ".\n");

//5º Em uma linha
var r2 = numeros.filter(valor => valor > 15 && valor < 18);
console.log(r2 + ".\n");

//6º Utilizando objeto
var funcionarios = [
    {nome: "Sabrina" , idade: 29},
    {nome: "Igor" , idade: 28},
    {nome: "Neide" , idade: 47},
    {nome: "Sandro" , idade: 51},
];
var filtroFuncionarios = funcionarios.filter(
    function(valor){
        return valor.nome.length < 6;
    });
    console.log(filtroFuncionarios);      

// Exercício - Filtrar somente a categoria "Eletrônicos"
var loja = [
    {id: 1, nome: "Portátil" , categoria: "Eletrônico"},
    {id: 2, nome: "Auriculares" , categoria: "Eletrônico"},
    {id: 3, nome: "Geladeira" , categoria: "Eletrodoméstico"},
    {id: 4, nome: "Placa de indução" , categoria: "Eletrodoméstico"},
    {id: 5, nome: "Bicicleta" , categoria: "Lazer"},
    {id: 6, nome: "Xbox" , categoria: "Game"},
];
var eletronicos = loja.filter(function(item) {
    return item.categoria === "Eletrônico";
});
console.log(eletronicos);
