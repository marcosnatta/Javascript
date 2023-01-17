
document.getElementById("datos-validacion").addEventListener(`click`,function(){
    let nombres = document.getElementById("nombre").value;
    let edades = document.getElementById("edad").value;

    localStorage.setItem(nombres,edades);

    function hola(nombre = nombres, edad = edades) {
        if(edad <= 18 || nombre === ""){
            swal.fire({
                text:"No introduciste un nombre valido o tu edad no es suficiente para acceder (+18)",
                showConfirmButton: false,
            })
            
        } 
        else {
            swal.fire({
                text:`Bienvedido a consulnatta ${nombre}, tu edad de ${edad} años es suficiente para atenderte en nuestros consultorios, adelante`,
                icon: "success",
                confirmButtonText: "continuar",
        })

        .then(async() => {
            const inputOptions = new Promise((resolve) => {
                setTimeout(() => {
                  resolve({
                    MERLO: "MERLO",
                    CABALLITO:"CABALLITO",
                  })
                }, 10)
              })
              
              

              const { value: sucursales } = await Swal.fire({
                title: 'Selecciona una sucursal',
                input: 'radio',
                inputPlaceholder: 'sucursal',
                inputOptions: inputOptions,

                inputValidator: (value) => {
                  if (!value) {
                    return 'tienes que elegir una sucursal'
                  }
                }
              })
              
              if (sucursales) {
                Swal.fire({title: `Elegiste sucursal:${sucursales}` })
              }
          });
          
        }         
    }
    hola()
})



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
        '',
        'success'
      )
      
    let mailUsuario = document.getElementById(`correo`).value;
    let passUsuario = document.getElementById(`contraseñausuario`).value;
    localStorage.setItem(mailUsuario,passUsuario);
 
    if (passUsuario === "") {
    Swal.fire(
      'ERROR EN VALIDACION',
      'el espacio de "contraseña" no puede estar vacio  ',
      'error'
    )}
    
})

// CARRO DE RESERVAS (misma forma que el carrito  )

const DatosReserva = [
  {
      id: 1,
      nombre: 'Reserva cardiologia',
      precio: 3500,   
      imagen: `./assets/images/doctora-carla.jpg`,
  },
  {
      id: 2,
      nombre: 'Reserva urologia',
      precio: 2500,
      imagen: `./assets/images/doctora-diaz.jpg`,
  },
  {
      id: 3,
      nombre: 'Reserva nefrologia ',
      precio: 4000,
      imagen: `./assets/images/doctor-carlos.jpg`,
  },
 
];


let carrito = [];
const pesos = '$';
const items = document.querySelector('#items');
const carrito2 = document.querySelector('#carrito');
const total = document.querySelector('#total');
const botonVaciar = document.querySelector('#boton-vaciar');
const localstorage = localStorage;
const reservaFinal = document.querySelector(`#boton-reservar`);

function verProductos() {
  DatosReserva.forEach((info) => {

      const DivTarjeta = document.createElement('div');

      DivTarjeta.classList.add('card', 'row-sm-3');

      const tarjeta = document.createElement('div');

      tarjeta.classList.add('card-body');
  
      const titulo = document.createElement('h5');

      titulo.classList.add('card-title');
      titulo.textContent = info.nombre;



     
      const Imagen = document.createElement('img');
      Imagen.classList.add('img-fluid');
      Imagen.setAttribute('src', info.imagen);
      
      const miPrecio = document.createElement('p');
      miPrecio.classList.add('card-text');
      miPrecio.textContent = `${info.precio}${pesos}`;



      
      //crear boton para comprar


      const reservaBoton = document.createElement('button')
      reservaBoton.classList.add('btn', 'btn-primary');
      reservaBoton.textContent = 'quiero mi turno';
      reservaBoton.setAttribute('marcador', info.id);
      reservaBoton.addEventListener('click', agregarProductoAlCarrito);


      tarjeta.appendChild(Imagen);
      tarjeta.appendChild(titulo);
      tarjeta.appendChild(miPrecio);
      tarjeta.appendChild(reservaBoton);
      DivTarjeta.appendChild(tarjeta);
      items.appendChild(DivTarjeta);
  });
}

//  agregar un item al carrito de la compra
function agregarProductoAlCarrito(evento) {
  
  carrito.push(evento.target.getAttribute('marcador'))

  verCarrito();

  guardarcarrolocalstorage()

}

function verCarrito() {
  
  carrito2.textContent = '';
  
  const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {

      const reserva = DatosReserva.filter((itemBaseDatos) => {

          
          return itemBaseDatos.id === parseInt(item);
      });
      
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
          return itemId === item ? total += 1 : total;
      }, 0);
    
      const lista = document.createElement('li');
      lista.classList.add('list-group-item', 'text-right', 'mx-2');
      lista.textContent = `${numeroUnidadesItem} x ${reserva[0].nombre} - ${reserva[0].precio}${pesos}`;

      
      carrito2.appendChild(lista);
  });

  total.textContent = calcularTotal();
}


/*Calcula el precio total teniendo en cuenta los productos repetidos*/
function calcularTotal() {

  return carrito.reduce((total, item) => {
      
      const reserva = DatosReserva.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
      });
      
      return total + reserva[0].precio;
  }, 0).toFixed(2);
}

// vaciar el carro
function vaciarCarrito() {
  carrito = [];
 
  verCarrito();

  localStorage.clear()
}

// reserva completada (simple)



reservaFinal.addEventListener(`click`, function(){
  Swal.fire({
    title: '¿Seguro que quiere esta reserva?',
    text: "una vez confirmado ya no podra anularse ",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, reservo'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        ' Felicidades',
        'su reserva se realizo con exito, en las 24 horas habiles recibira un mail para poder pagar',
        'success'
      )
    }
  })
 
})
// guardar carro en local storage 
function guardarcarrolocalstorage () {
  localstorage.setItem('carrito', JSON.stringify(carrito));
}



botonVaciar.addEventListener('click', vaciarCarrito);


verProductos();
verCarrito();
