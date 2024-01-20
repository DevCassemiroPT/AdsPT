//Substring
var s = "Javascrip e React";
var pos = s.indexOf("React");
var novaStr = s.substring(12,17)
console.log(novaStr);

//StartsWith
var frase = "Olá mundo";
if(frase.startsWith("Olá")){
    let sub = frase.substring(4);
    let novaString = sub.replace("mundo","pessoal");
    let = novaStringMaiuscula = novaString.toUpperCase();
    console.log(novaStringMaiuscula);
}

//Exercícios - exemplo do professor 
var url = "http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme";
const parametros = url.split("?")[1];
console.log("1º etapa » " + parametros);

const valores = parametros.split("&");
console.log("\n2º etapa » " + valores);

