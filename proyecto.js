let nombre = prompt("ingrese su nombre")
let edad = prompt("ingrese su edad")
let prestamo = " "
let cuotasPrestamo = " "
if (nombre){
    alert("bienvenido a prestamos.com" + " " + nombre)
}


if(edad > 18){
    alert("tienes edad para un prestamo")
}else{
    alert("no tienes edad para un prestamo")
}
;

if (prestamo = parseInt(prompt("ingrese un monto a cotizar"))){
    if (cuotasPrestamo = prompt("ingrese cantidad de cuotas"))
    for (let i = 1; i <= 12; i++) {
        let totalPrestamo = (prestamo / cuotasPrestamo) + 200;
        alert( "$" + prestamo + " en " + cuotasPrestamo + " cuotas de" + " " + "$" + totalPrestamo);
        if(i <= 12){
            break;
        }
    }
}
 alert("muchas gracias por elegirnos, vuelve pronto")
