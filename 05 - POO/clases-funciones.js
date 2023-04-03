//Esto es una clase y se tiene que instanciar aun que esta es una forma antigua de crear una clase
function Persona(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;

    this.print = function (){
        console.log(`${this.nombre} ${this.edad}`);
    }
}

const p1 = new Persona('Jonny', 25);
const p2 = new Persona('Mateo', 01);
console.log(p1.nombre);
console.log(p2.nombre);
p1.print();