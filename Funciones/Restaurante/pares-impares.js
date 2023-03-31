let numeros = [1,2,3,4,5,6,7,8,9];
let impares = [], pares = [];
let numRandom = 0;
for(let i of numeros ){
    numRandom = parseInt(Math.random() * 100);
    let r = i * numRandom;
    if(r % 2 == 0){
        console.log(`${i} x ${numRandom} = ${r}`);
        pares.push(r);
    }else{
        console.log(`${i} x ${numRandom} = ${r}`);
        impares.push(r);
    }
}
console.log(`Array de pares: ${pares}`);
console.log(`Array de impares: ${impares}`);