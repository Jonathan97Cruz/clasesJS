class Person{
    #name //Indicamos que es una propiedad unica de la clase
    #age
    constructor(name, age){
        this.#name = name;
        this.#age = age;
        this.#methodPrivate();//metodo estatico
    }
    set setName(name){
        this.#name = name;
    }
    get getName(){
        return this.#name;
    }
    set setAge(age){
        this.#age = age;
    }
    get getAge(){
        return this.#age;
    }
    #methodPrivate(){
        console.log('Soy metodo privado');
    }

}
let p1 = new Person('Jonny',12);
console.log(p1.getName);
p1.setName = 'Jonathan';
console.log(p1.getName);



//p1.nombre = 'Jonh'; 
//console.log(p1);