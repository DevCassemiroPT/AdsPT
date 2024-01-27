class Funcionario{
    constructor(nome,idade,cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.trabalhando = false;
    }
    seApresentar(){
        console.log("Olá prazer, eu me chamo")
    }
    trabalhar(){
        if(this.trabalhando){
            console.log("Está trabalhando");
            return;
    }
    this.trabalhando = true;
    }

}

class Gerente extends Funcionario{
    constructor(departamento){
        this.departamento = departamento;
        this.gerenciamento = false;
    }

    gerenciar(){
        if(this.gerenciamento){
            console.log("Gerenciamento realizado");
            return;
        }
        this.gerenciamento = true;
    }
}

class Desenvolvedor extends Funcionario{
    constructor(linguagem){
        this.linguagem = linguagem;
        this.programando = false;
    }
    programar(){
        if(this.programando){
            console.log("Está programando");
            return;
        }
        this.programando = true;
    }
}