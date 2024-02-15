class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() { 
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando.`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está desenvolvendo em ${this.linguagem}.`;
    }
}

function exibirErro(mensagem) {
    let div = document.createElement('div');
    div.textContent = 'Preencha todos os campos. Tente novamente!';
    document.body.appendChild(div);
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    try {
        let nome = document.getElementById('nome').value;
        let idade = document.getElementById('idade').value;
        let cargo = document.getElementById('cargo').value;
        let departamento = document.getElementById('departamento').value;
        let linguagem = document.getElementById('programação').value;

        if (!nome || !idade || !cargo || !departamento || !linguagem) {
            throw new Error('Por favor, preencha todos os campos corretamente.');
        }

        let gerente = new Gerente(nome, idade, cargo, departamento);
        let desenvolvedor = new Desenvolvedor(nome, idade, cargo, linguagem);

        console.log(gerente.seApresentar());
        console.log(gerente.trabalhar());
        console.log(gerente.gerenciar());

        console.log(desenvolvedor.seApresentar());
        console.log(desenvolvedor.trabalhar());
        console.log(desenvolvedor.programar());
    } catch (erro) {
        exibirErro(erro.message);
    }
});

