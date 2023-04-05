//import '../css/estilos.css';
import esponja from '../img/bob.png';

export const saludar =  (nombre) => {
    console.log('Creando etiqueta H1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;
    document.body.append(h1);

    const img = document.createElement('img');
    img.src = esponja
    document.body.append(img);
}