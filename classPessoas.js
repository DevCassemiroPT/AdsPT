class People{

    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
    }

    falar(){
        console.log("Olá " + this.name)
    }
    
    get fullName(){
        console.log("Olá " + this.name + " " + this.lastname)
        //Encapsulamento
    }
}

p1 = new People ("Igor", "Alexandre");
p1.falar();
p1.fullName;