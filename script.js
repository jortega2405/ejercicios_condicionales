//Ejercicios Condicionales

const ejercicio_uno = (num, total) => {
    let descuento;
  if (num >= 3) {
       descuento = total - (total * 0.3);
  }else{
      descuento = total - (total * 0.1);
  }
  return `El numero de camisas es ${num}
  \n Tiene un valor total sin descuento de: ${total}
  \n Si le aplica el descuento de la promocion le queda en: ${descuento}`;
}
console.log(ejercicio_uno(3,100000));

/****************************/

const ejercicio_dos = (x, total) => {
    let descuento;
    if (x < 74) {
        descuento = (total*0.15);
    }else{
        descuento = (total * 0.2);
    }
    return `Su descuento es de: ${descuento}`;
}
console.log(ejercicio_dos(74, 100))

/****************************/
//haciendo uso del operador ternario
const ejercicio_tres = (monto) =>{
    let resultado = monto <= 50000 ? (monto * 0.03) : (monto * 0.02);
    console.log(` Cliente cuenta con un monto de $${monto}
    \n por lo que se le debe pagar al cliente el valor de $${resultado}`);
}
ejercicio_tres(60000);

/****************************/


const ejercicio_cuatro = (promedio, ganancias_diarias) => {
    if(promedio > 170){
        return `Tendrá que parar su producción por una semana y recibira una multa de ${ganancias_diarias / 2}.
        \n En total se perderán $${ganancias_diarias * 5} sumado a $${ganancias_diarias / 2} que equivalen a la multa de
        \n para un total de $${(ganancias_diarias * 5) + (ganancias_diarias / 2)}
        `;
    }else{
        return `No tendrá sanción ni multa por lo que no tendrá perdidas`;
    }
};
console.log(ejercicio_cuatro(200, 1000000))

/****************************/
//Teniendo en cuenta que la tasa de devaluacion no la tenemos, tomamos esta como parametro de entrada y debe ser negativa
const ejercicio_cinco = (valor, tasa_devaluacion_auto, tasa_crecimiento_casa) => {
    const incremento = (((valor * tasa_crecimiento_casa)* tasa_crecimiento_casa) * tasa_crecimiento_casa);
    const devaluacion = (((valor * tasa_devaluacion_auto)* tasa_devaluacion_auto) * tasa_devaluacion_auto) * -1;
    if(devaluacion < (incremento / 2)){
        return `Debería comprar el Automovil`
    }else{
        return `No debe comprar el automovil`
    }
};
console.log(ejercicio_cinco(5000, -0.5, 0.9)) // recuerda La tasa de devaluacion debe ser negativa

/****************************/

const ejercicio_seis = (numero_computadoras) => {
    const valor_total = numero_computadoras * 11000;
    if(numero_computadoras < 5){
        let descuento = valor_total * 0.1;
        return `Su descuento será de $${descuento}, debe pagar $${valor_total - descuento}`; 
    }else if(numero_computadoras >= 5 && numero_computadoras < 10){
        let descuento = valor_total * 0.2;
        return `Su descuento será de $${descuento}, debe pagar $${valor_total - descuento}`; 
    }else{
        let descuento = valor_total * 0.4;
        return `Su descuento será de $${descuento}, debe pagar $${valor_total - descuento}`; 
    }
};
console.log(ejercicio_seis(11))

/****************************/

const ejercicio_siete = (valor_sin_iva, marca) => {
    let descuento = 0;
    marca = marca.toUpperCase();
    if(marca === 'NOSY'){
        descuento += valor_sin_iva * 0.05;
    }
    if(valor_sin_iva >= 2000) {
        descuento += valor_sin_iva * 0.1;
    }
    const valor = (valor_sin_iva - descuento)* 1.16;
    return `Debe pagar $${valor}`
};
console.log(ejercicio_siete(2000, 'nosy'))

/****************************/
const ejercicio_ocho = (total_compra) => {
    let cantidad_invertir;
    let valor_prestado = 0;
    let valor_credito;

    if(total_compra > 500000){
        cantidad_invertir = total_compra * 0.55;
        valor_prestado = total_compra * 0.3;
        valor_credito = total_compra * 0.15;
    }else{
        cantidad_invertir = total_compra * 0.7;
        valor_credito = total_compra * 0.3;
    }
    let interes = valor_credito * 0.2;

    return `Valor total de la compra: ${total_compra} \n
    Cantidad a invertir: ${cantidad_invertir} \n
    Valor del prestamo: ${valor_prestado} \n
    Valor del credito: ${valor_credito} \n
    Intereses: ${interes}
    `;
};
console.log(ejercicio_ocho(400000))

/****************************/

const ejercicio_nueve = (numero1, numero2) => {
    if(numero1 === numero2) {
        return numero1 * numero2;
    }else if(numero1 > numero2) {
        return numero1 - numero2;
    }else{
        return numero1 + numero2;
    }
};
console.log(ejercicio_nueve(1, 2))

/****************************/
