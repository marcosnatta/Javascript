let nombre = prompt("Bienvenido a prestanatta, ingrese su nombre por favor");
while (nombre === "") {
    alert("ingresa un nombre");
    nombre = prompt("Bienvenido a prestanatta, ingrese su nombre por favor");
    break;
}

let prestamo = parseInt(prompt("hola" + " " + nombre + " " + "ingrese el monto estimado para el prestamo"));

let cuotasPrestamo = parseInt(prompt("ingrese cantidad de cuotas, hasta 12"))
switch (prestamo) {
    case prestamo:
        console.log("haz elejido un prestamo de $" + prestamo)
        break;
        default:
            console.log("tienes que elegir un prestamo")
            break;
}
        
        

for (let i = 1; i <= 12; i++) {
    let totalPrestamo = prestamo / cuotasPrestamo;
    console.log( prestamo + " en " + cuotasPrestamo + " cuotas de" + " " + "$" + totalPrestamo);


    if(i <= 12){
        break;
    }
}