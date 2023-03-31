let cm = parseFloat(prompt('Ingresa el consumo'));
let imp = 0.19, impa = 0.0, desc = 0.0, pagar = 0.0, msj = "",cmd=0.0;

if(cm <= 100){
    let d = "10%";
    desc = cm*0.10;
    cmd = cm - desc;
    impa = cmd * imp;
    pagar = cmd + impa;
    msj = `Consumo ingresado ${cm} <br> Obtienes un ${d} de descuento <br>
            Total de descuento = ${desc} <br> Impuesto del 19% = ${impa} <br> Total a pagar = ${pagar}<br>¡Gracias por tu preferencia!`;

}else if(cm > 100 && cm < 200){
    let d = "20%";
    desc = cm*0.20;
    cmd = cm - desc;
    impa = cmd * imp;
    pagar = cmd + impa;
    msj = `Consumo ingresado ${cm} <br> Obtienes un ${d} de descuento <br>
            Total de descuento = ${desc} <br> Impuesto del 19% = ${impa} <br> Total a pagar = ${pagar}<br>¡Gracias por tu preferencia!`;
}else if(cm >= 200){
    let d = "30%";
    desc = cm*0.30;
    cmd = cm - desc;
    impa = cmd * imp;
    pagar = cmd + impa;
    msj = `Consumo ingresado ${cm} <br> Obtienes un ${d} de descuento <br>
            Total de descuento = ${desc} <br> Impuesto del 19% = ${impa} <br> Total a pagar = ${pagar}<br>¡Gracias por tu preferencia!`;
}else{
    msj = `Por favor ingresa solo numeros`;
}
document.write(msj);