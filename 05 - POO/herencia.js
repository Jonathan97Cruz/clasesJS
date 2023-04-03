class Persona{

    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    
    detailPerson(){
        console.log(`Nombre: ${this.nombre} \nEdad: ${this.edad} `);
    }
}

class Employee extends Persona{
    constructor(nombre, edad, sueldo){
        super(nombre,edad);
        this.sueldo = sueldo;
    }
    detailEmployee(){
        super.detailPerson();
        console.log(`Sueldo: ${this.sueldo}`);
    }
}

const e1 = new Employee('Alan',26,520);
console.log(e1);
e1.detailEmployee();