class Mate{
    static #pi = 3.141592;

    static get PI(){
        return this.#pi;
    }
    static suma(a,b){//metodo estatico y lo podemos usar directamente con el nombre de la clase
        return a + b;
    }
}

console.log(Mate.PI);
console.log(Mate.suma(40,50))

//Mate.pi = 123567;
//console.log(Mate.pi);