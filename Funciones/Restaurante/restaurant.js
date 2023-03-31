let consumo =prompt("Ingresa el total del consumo");

let c =  Number(consumo);
let imp = 0.19,impp = 0, desc = 0, pagar = 0, desp=0, msj ="" ;

if(consumo <= 100){
    let d = "10%";
    desc = consumo * 0.10;
    desp = consumo - desc;
    impp = desp*imp;
    pagar = desp+impp;
    msj = `Consumo ingresado ${consumo} <br> Obtienes un ${d} de descuento <br>
                   Total de descuento = ${desc} <br> Impuesto del 19% = ${impp} <br> Total a pagar = ${pagar}<br>¡Gracias por tu preferencia!`;
}else if(consumo > 100){
    let d = "20%";
    desc = consumo * 0.20;
    desp = consumo - desc;
    impp = desp*imp;
    pagar = desp+impp;
     msj = `Consumo ingresado ${consumo} <br> Obtienes un ${d} de descuento <br>
                 Total de descuento = ${desc} <br> Impuesto del 19% = ${impp} <br> Total a pagar = ${pagar}<br>¡Gracias por tu preferencia!`;
}
document.write( msj);