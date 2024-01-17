// For
var notas = [5,8,6,2,4,9];
var soma = 0;

for (pos = 0; pos < notas.length; pos++){
   soma += notas[pos];
}
var media = soma/notas.length;
console.log("A sua média de notas é: " + media + "!");


//ForEach
var a = [2,4,6,8,10];

var tot = 0;
a.forEach (soma => {
    tot += soma;
});
console.log("»" + tot + "«\n");


//For in - Para pegar todos os elementos
var carro = [{modelo: "Audi A9", marca: "Audi", ano: 2025},
             {modelo: "Compass", marca: "Jeep", ano: 2024},
             {modelo: "I5", marca: "Bmw", ano: 2024},
             {modelo: "I9", marca: "Mercedes", ano: 2026},
];

for (let caracteristicas in carro){
   console.log(carro[caracteristicas]);
};


//For of - Para pegar um elemento específico
for (let c of carro){
   console.log("» " + c.ano + " «");
};


//While - Só vai rodar se a condição for satisfeita
var c = 1;
while (c <= 10){
   console.log(c);
   c++;
};


//Do while - irá acontecer pelo menos uma vez, independente se for true or false
var t = 1;
do {
   console.log("\n*" + t + "*");
   t++
} while (t <= 5);

//Exercício
let arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let i = 0;

while(i < arrays.length) {
    let soma = arrays[i].reduce(function(acumulado, numero) {
        return acumulado + numero;
    }, 0);

    console.log('A soma dos números no array ' + (i+1) + ' é: ' + soma);
    i++;
};