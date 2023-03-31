const primo = (numero) => {
    let contador = 0;
    let numeros = [];

    for(let i = 0; i < numero; i++){
        numeros.push(i+1);
    }
    for(let n of numeros){
        if(n === 1 || n === numero){
            continue;
        }

        if(numero % n === 0){//5/2 = 0 false 4/2 = 0 true
            contador++;
        }
    }
    return contador === 0;
    //console.log(numeros);
}
let numero = Number(prompt('Ingresa un numero'));

if(primo(numero)){
    document.write(`El numero ${numero} es primo`);
}else{
    document.write(`El numero ${numero} no es primo`);
}

