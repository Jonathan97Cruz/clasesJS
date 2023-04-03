//con una constante podemos exportar el patron modular
const myModule = (() => {
    'use strict' //va verificar tu codigo de forma estricta

    const btnPerimSquare = document.querySelector('#btnPerimSquare'),
        btnAreaSquare = document.querySelector('#btnAreaSquare'),
        btnPerimeterTriangle = document.querySelector('#btnPerimeterTriangle'),
        btnAreaTriangle = document.querySelector('#btnAreaTriangle'),
        btnDiameterCircle = document.querySelector('#btnDiameterCircle'),
        btnPerimeterCircle = document.querySelector('#btnPerimeterCircle'),
        btnAreaCircle = document.querySelector('#btnAreaCircle');

    //area y perimetro del cuadrado
    const perimSquare = (side) => side * 4;
    const areaSquare = (side) => side * side;

    btnPerimSquare.addEventListener('click', () => {/* Al hacer click, crea una funciona anonima y hace las operaciones con la funcion flecha */
        let inputSide = document.getElementById('inputSide');
        let value = Number(inputSide.value);
        const result = `El perimetro de Cuadrado es: ${perimSquare(value)} cm`;
        document.getElementById('result').innerText = result;
    });

    btnAreaSquare.addEventListener('click', () => {
        let inputSide = document.getElementById('inputSide');
        let value = Number(inputSide.value);
        const result = `El área del Cuadrado es: ${areaSquare(value)} cm`;
        document.getElementById('result').innerText = result;
    });

    //area y perimetro de triangulo
    const perimTria = (side1, side2, side3) => side1 + side2 + side3;
    const areaTria = (base, height) => (base * height) / 2;

    btnPerimeterTriangle.addEventListener('click', () => {
        let inputSide1 = document.getElementById('side1');
        let inputSide2 = document.getElementById('side2');
        let inputSide3 = document.getElementById('side3');
        let value1 = Number(inputSide1.value);
        let value2 = Number(inputSide2.value);
        let value3 = Number(inputSide3.value);
        const result = `El perimetro del Triangulo es: ${perimTria(value1, value2, value3)} cm`;
        document.getElementById('result').innerText = result;
    });

    btnAreaTriangle.addEventListener('click', () => {
        let inputBase = document.getElementById('base');
        let inputHeight = document.getElementById('height');
        let value1 = Number(inputBase.value);
        let value2 = Number(inputHeight.value);
        const result = `El área del Triangulo es: ${areaTria(value1, value2)} cm`;
        document.getElementById('result').innerText = result;
    });

    //Diametro, perimetro y area de circulo
    const diameterCircle = (radius) => radius * 2;
    const perimeterCircle = (radius) => radius * Math.PI;
    const areaCircle = (radius) => (radius * radius) * Math.PI;

    btnDiameterCircle.addEventListener('click', () => {
        let inputRadius = document.getElementById('radius');
        let value = Number(inputRadius.value);
        const result = `El Diametro del Circulo es: ${diameterCircle(value)} cm`;
        document.getElementById('result').innerText = result;
    });

    btnPerimeterCircle.addEventListener('click', () => {
        let inputRadius = document.getElementById('radius');
        let value = Number(inputRadius.value);
        const result = `El Perimetro del circulo es: ${perimeterCircle(value)}`;
        document.getElementById('result').innerText = result;
    });

    btnAreaCircle.addEventListener('click', () => {
        let inputRadius = document.getElementById('radius');
        let value = Number(inputRadius.value);
        const result = `El Área del circulo es: ${areaCircle(value)}`;
        document.getElementById('result').innerText = result;
    });

    /*return {aqui podemos exportar lo que queremos que retorne aun que no es la mejor forma
        cpq : calculatePerimSquare,
        caq : calculateAreaSquare
    };**/

})();//Funcion flecha anonima para una proteccion de patron modular

