const minhaPromise = new Promise ((resolve, reject) => {
    const sucesso = true;

    if (sucesso){
        resolve ("Deu tudo certo!");
    } else {
        reject ("Algo correu mal!");
    }
})

minhaPromise
.then ((resultado) => {
    console.log ("Parabéns: " + resultado);
})
.catch ((erro) => {
    console.log ("Falhou: " + erro);
})