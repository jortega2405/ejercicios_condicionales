//Ejercicios Condicionales

let ejercicio_uno = (num, total) => {
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

let ejercicio_dos = (x, total) => {
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

