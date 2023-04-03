class Persona{
    //nombre;//propiedades
    //edad;
    otro;//fuera del constructor podemos usar otras varibles

    constructor(nombre, edad){
        //Sirve para crear el objeto
        this.nombre = nombre;
        this.edad = edad;
    }

    print(){//metodo
        console.log(this.nombre,this.edad);
    }
}

const p1 = new Persona('Aldahir',01);
//p1.nombre = 'Jonh'; esto ya no lo usamos cuando creamos un constructor
//p1.edad = 23;

console.log(p1.nombre);
p1.print();