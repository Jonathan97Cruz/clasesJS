const palindromo = (palabra) => {
    palabra = palabra.replace(' ','');
    palabra = palabra.toLowerCase();
    
    let palabraInv = palabra.split('').reverse().join('');

    if(palabra == palabraInv){
        return true
    }else{
        return false;
    }
    //console.log(palabraInv);
}
let palabra = prompt('Ingresa una palabra');
let esPal = palindromo(palabra);
if(esPal){
    document.write(`La palabra ${palabra} es palindromo`);
}else{
    document.write(`La palabra ${palabra} no es palindromo`);
}
//palindromo('Luz azul');