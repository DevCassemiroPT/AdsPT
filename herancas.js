class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log("Já está ligado");
            return;
        }
        this.ligado = true;
    }
}

class SmartPhone extends DispositivoEletronico{//extends: é utilizado para chamar a class(DispositivoEletronico)
    constructor(nome,cor,modelo){
        super(nome); //super: é utilizado para chamar constructor(nome)
        this.cor = cor;
        this.modelo = modelo;
    }
}