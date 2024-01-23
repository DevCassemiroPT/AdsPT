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

 
//Exercícios 
// 1º split, startWith, substring, for, if e toUpperCase
var url = "http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme";
const parametros = url.split("?")[1];
console.log("1º etapa » " + parametros);

const valores = parametros.split("&");
console.log("\n2º etapa » " + valores);

for(let i = 0; i < valores.length; i++){
    if(valores[i].startsWith("atores=")){
        valores[i] = "atores=" + valores[i].substring(7).toUpperCase()
    }
};
console.log("\n3º etapa » " + valores + "\n\n");


//2º - arrays, map, length, if e toUpperCase
let nomes = ["Bernardo", "Ana", "Luizinho", "João", "Cida", "Sabrina"];

let nomeTranformados = nomes.map((nome) => {
     if(nome.length < 5){
        return nome.toUpperCase();
    } else {
        return nome;
    }
});
console.log(nomeTranformados);


