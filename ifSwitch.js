// If
var pais = "Venezuela";

if(pais != "Brasil"){
    console.log("\nVocê é estrangeiro(a), seja bem vindo(a) ao Brasil!\n");
}else{
    console.log("\nVocé é Brasileiro, ame seu pais!\n");
}


var idade = 19;

if(idade >= 18){
    console.log("\nVocê é maior de idade, boa viagem!\n");
}else if(idade == 17){
    console.log("\nVocê ainda não tem 18 anos, por favor esteja acompanhado de um responsável para viajar!\n");
}else{
    console.log("Desculpe, é necessário a presença de um responsável para o embarque\n")
}


//Switch
var diaSem = 5;
switch(diaSem){
    case 1: 
        console.log("Domingo - Planejamento semanal\n");
        break;
    case 2:
        console.log("Segunda - Execução das metas\n");
        break;
    case 3:
        console.log("Terça-Feira - Execução e correção\n");
        break;
    default:
        console.log("Dia de descanso!\n")
};

//Exercício
var valor = 2;
switch (valor) {
    
	case 1:
		console.log("» CAFÉ - R$ 1,55 « É uma excelente escolha.");
		break;
	case 2:
		console.log("» LEITE - R$ 3,47 « Acompanha bem com tudo.");
		break;
	case 3:
		console.log("» CHÁ - R$ 2,35 « Nada melhor para relaxar.");
		break;
	default:
		console.log("» Opção inválida « Por favor selecione uma bebida: café, leite ou chá.");

};