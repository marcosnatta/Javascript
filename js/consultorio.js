/*
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
*/     






//borrar etiquetas que no usare para esta entrega

let eliminarFooter = document.querySelector("footer")
eliminarFooter.remove()


// input para correo y contraseña

let input = document.createElement("input")
input.innerText = "ingrese su contraseña"
input.setAttribute("type","password")
input.setAttribute("id", "contraseñausuario")
document.querySelector("#contraseña").appendChild(input)


// crear un boton para enviar informacion

let botonEnviar = document.createElement("button")
botonEnviar.setAttribute("class","btn btn-info")
botonEnviar.setAttribute("id","enviado")
botonEnviar.textContent = "Enviar Registro"
document.querySelector("#enviar").appendChild(botonEnviar);

const mail = document.querySelector("#correo")

const contraseña = document.querySelector("#contraseña");


formulario.addEventListener("submit",validacion);
function validacion(e) {
    e.preventDefault()
    //console.log(`Mail: ${correo.value}`)
    //console.log(`Contraseña: ${contraseña.value}`)
    // ----------------- evento de que el formulario se envio ------------
}


// guardar mail y contraseña en local storage


document.getElementById("enviar").addEventListener(`click`,function(){
    Swal.fire(
        'Gracias por registrarte',
        'Te enviaremos un mail para asesorarte',
        'success'
      )
    let mailUsuario = document.getElementById(`correo`).value;
    let passUsuario = document.getElementById(`contraseñausuario`).value;
    localStorage.setItem(mailUsuario,passUsuario);
   
    
})
 
// los obejtos y variables comentados mas arriba son para la entrega final, para lo que tengo planeado hacer