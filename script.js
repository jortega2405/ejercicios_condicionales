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


