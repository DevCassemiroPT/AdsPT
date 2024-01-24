
function calcularImc(nome, sobrenome,p, a){
    return {
        nome,
        sobrenome,
        peso: p,
        altura: a,
        calculoImc(){
            const imc = this.peso / (this.altura ** 2).toFixed(1)
            if( imc < 18.5){
                console.log("Resultado do seu IMC: Abaixo do peso\n");
            } else if (imc >= 18.5 && imc <= 24.9){
                console.log("Resultado do seu IMC: Peso normal\n");
            } 
            else if (imc >= 25 && imc <= 29.9){
                console.log("Resultado do seu IMC: Acima do peso\n");
            }
             else if (imc >= 30 && imc <= 34.9){
                console.log("Resultado do seu IMC: Obesidade I\n");
            }
             else if (imc >= 35 && imc <= 39.9){
                console.log("Resultado do seu IMC: Obesidade II\n");
            }
             else if (imc >= 40){
                console.log("Resultado do seu IMC: Obesidade III\n");
            }
        }
    }
};

const p1 = calcularImc("Bernardo", "Anacleto", 85, 1.92);
p1.calculoImc();

