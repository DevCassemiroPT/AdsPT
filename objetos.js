//1º - Maneira de crair objetos
const pessoa = {
    nome: "Igor",
    sobrenome: "Alexandre",
    apelido: "Cassemiro"
}
console.log("1º - " + pessoa['apelido']);

//2º - Maneira de crair objetos
const funcionario = new Object();
funcionario.nome = "Teodoro";
funcionario.sobrenome = "Alexandre";

console.log("2º - " + funcionario.nome + "\n");

//3º - Maneira de crair objetos
/*function crairPessoas(nome, sobrenome){
    return {nome, sobrenome};
}*/
function crairPessoas(nome, sobrenome, i){
    return {
        nome,
        sobrenome,
        idade: i,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }    
        /*quando eu utilizo o GET, na hora de chamar eu preciso passa a função para ele interpretar de forma 
        correta. Exemplo 1 com função (): console.log(p1.nomeCompleto()); 
        Exemplo 2 sem função console.log(p1.nomeCompleto);*/
        };
}
const p1 = crairPessoas("Bernardo", "Anacleto", 25);
const p2 = crairPessoas("Paula", "Macedo", 23);
const p3 = crairPessoas("Luiz", "José",17);

console.log(p1.nomeCompleto);
console.log(p2);
console.log(p3);