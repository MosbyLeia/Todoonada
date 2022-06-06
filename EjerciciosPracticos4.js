// 1. 

var a = 6;
var b = 2;
if (a < b) {
  console.log("a es menor");
}

else {
  console.log("b es menor");
}

// 2

var nro = 7;

if ((nro % 2) == 0) {
  console.log("es par");
} else {
  console.log("es impar");
}

// 3

var ganeLaCarrera = false;
if (ganeLaCarrera == true) {

  console.log("Ganaste");
} else {
  console.log("Perdiste");
}
// 4

var posicionEnLaCarrera = 6;
if (posicionEnLaCarrera == 1) {
  console.log("FELICITACIONES, SALISTE 1RO");
}
if (posicionEnLaCarrera == 2) {
  console.log("Te falto poquito para ganar");
}
if (posicionEnLaCarrera == 3) {
  console.log("Sos un orgullo para tu familia");
}
if (posicionEnLaCarrera > 3) {
  console.log("Volvé a tu casa")
}
else {
  console.log("No tires fruta")
}


// 6

var facturaAPagar = 145796;
if (facturaAPagar > 1000) {
  console.log(facturaAPagar* 0.8)
} else {a
  console.log(facturaAPagar)
}

// 7

var montoVendido = 1256;
var codigoVendedor = 14;

if (codigoVendedor < 100) {
  console.log((montoVendido * 30 )/100)
} 
if (codigoVendedor >= 100 & codigoVendedor <= 200) {
  console.log((montoVendido * 20 )/100)
} else {
  console.log((montoVendido * 10 )/100)
}
// 8
var dia = 2;
switch (dia) {
  case 1: console.log("Lunes")
    
    break;
    case 2: console.log("Martes")
    
    break;
    case 3: console.log("Miércoles")
    
    break;
    case 4: console.log("Jueves")
    
    break;
    case 5: console.log("Viernes")
    
    break;
    case 6: console.log("Sábado")
    
  
    break;
  default:  console.log("Domingo")
    break;
}
// 9

var personasGrupo = 8;
if (personasGrupo < 8) {
  console.log("El pago es " + personasGrupo * 1.5)
} else {
  console.log("El pago es " + personasGrupo * 0.5)  
}

// 10. Una farmacia hace el 15% de descuento a sus clientes si la compra es mayor a 100 pesos. Escribir un programa 
//que dado el monto de una compra como valor numérico, diga cuanto debe abonar el cliente aplicando el descuento si es necesario.

var montoCompra = 16;
if (montoCompra > 100) {
  console.log("El monto es $ " + montoCompra * 0.85)  
} else {
  console.log("El monto es $ " + montoCompra)  
}