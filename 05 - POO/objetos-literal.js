//Objetos literales se crean con {}
const persona = {
    nombre : 'Jonh', 
    apellido : 'Cruz',
    edad : 25,

    //creando un metodo
    nameComplete(){
        return `${this.nombre} ${this.apellido}`;
    },

    //Creando una lista
    trajes : ['Traje 81','Traje 82','Traje 83'],

    //objeto anidado
    direccion : {
        cp : '57000',
        pais : 'México',
        depart : 'Nezahualcoyotl'

    }
}

console.log(persona);
console.log(persona.nameComplete());
console.log(persona.trajes);
console.log(persona.direccion.pais);//trae atributos de un objeto anidado