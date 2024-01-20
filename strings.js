//Tamanho das palavras
var nomeCompleto = "Igor\n";
var tamanho = nomeCompleto.length;
console.log(tamanho);

//if e else com o tamanho das palavras
var resultado = tamanho <= 7 ? "\nPor favor digite seu nome completo!\n" : "Seja bem vindo(a)!\n";
console.log(resultado);

//Caixa alta
var cxalta = nomeCompleto.toLocaleUpperCase();
console.log(cxalta);

//Localizando a posição da palavra em uma frase ou texto
var times = "Barcelona - Real Madri - Juventus - Porto - Benfica"
var localizandoTime = times.indexOf("Porto")
console.log(localizandoTime);

//Cortar uma frase
var jogoCortado = times.slice(24,);
console.log("\n" + jogoCortado + "\n");

//Includes - Localiza a palavra
var val = times.includes("Porto");
console.log(val);

//Concat - Une as strings
var str1 = "\nHello";
var str2 = " world!";
var str3 = str1.concat(str2);
console.log(str3);

//Trim - tira os espaços do inicio e fim
var space = "\n            Aprimorando o JavaScript!       ";
console.log(space.trim());

//Split - Transforma um string em array
var num = "1,2,3,4,5,6,7,8,9,10";
var arr = num.split(",");
console.log(arr[5]);
