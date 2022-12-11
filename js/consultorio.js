// VARIABLES COMUNES
let nombres = prompt("introduce tu nombre")
let edades = Number(prompt("introduce tu edad"))


// FUNCION
function hola(nombre = nombres, edad = edades) {
    console.log(`Bienvedido a consulnatta ${nombre}, tu edad de ${edad} años es suficiente para atenderte en nuestros consultorios, adelante`)    
}

while (edades <= 18 ) {
    alert("solo antendemos a mayores de 18 años, ingresaste la edad de:" + " " +  edades);
    edades = Number(prompt("ingresa otra edad para continuar"));
}

hola()

let Consulss = prompt("tenemos 2 consultorios para ofrecerte, selecciona numero 1, para consulnatta MERLO, o numero 2 para consulnatta CABALLITO")
switch (Consulss) {
    case "1":
        alert("Elegiste consulnatta MERLO")
        break;     
        case "2":
        alert("Elegiste consulnatta CABALLITO")
        }
// OBJETOS (CONSULTORIOS)
        
        class consulnatta{
            constructor(nombre, localidad, calle){
                this.nombre = nombre;
                this.localidad = localidad;
                this.calle = calle;
            }
            presentacion(){
                console.log("Hola te presentamos al consultorio" + this.nombre, this.calle);
            }
        }
        const consulnattamerlo = new consulnatta("Consulnatta-MERLO", "Merlo", "av libertador 455");
        const consulnattacaballito = new consulnatta("Consulnatta-CABALLITO", "Caballito", "av libertador 455");

switch (Consulss) {
    case "1":
        console.log(consulnattamerlo.presentacion());

        break;  
        case "2":
        console.log(consulnattacaballito.presentacion());
        
        break;
        }

// ARRAYS

class PrecioConsultas{
    constructor(especialidad, precio){
        this.especialidad = especialidad
        this.precio = precio
    }
    TotalPrecio(){
        this.total = this.especialidad + this.precio
    }
}
const TotalEspecialidades = [];
TotalEspecialidades.push(new PrecioConsultas("cardiologia", "$3500"))
TotalEspecialidades.push(new PrecioConsultas("urologia", "$2500"))
TotalEspecialidades.push(new PrecioConsultas("nefrologia", "$4000"))

console.log(TotalEspecialidades)
// METODO SIMPLE PARA ESTE CASO
const Especialidades = [`cardiologia`, `urologia`, `nefrologia`]
Especialidades.splice(1,2)
console.log(Especialidades)
