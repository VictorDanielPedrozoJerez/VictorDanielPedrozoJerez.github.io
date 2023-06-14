

let usuarios = {};
let juegos = {};
let puntos = {};

let IDJuego = 0;
const formInsertar =document.getElementById("formInsertar");
const result = document.getElementById("result");
const resultCompra = document.getElementById("resultCompra");
const resultUsu = document.getElementById("resultUsu");

const ModuloUsuarios = document.getElementById("ModuloUsuarios");
const ModuloJuegos = document.getElementById("ModuloJuegos");
const ModuloCompras = document.getElementById("ModuloCompras");
const ModuloInicio = document.getElementById("ModuloInicio");
const ModuloFidelizacion = document.getElementById("ModuloFidelizacion");

function consultarUsuarioPorId() {
  
  let id = document.getElementById("Consultar").value;

  
  if (usuarios.hasOwnProperty(id)) {
    
    let usuario = usuarios[id];
    document.getElementById("id").textContent = usuario.id;
    document.getElementById("nombre").textContent =usuario.nombre;
    document.getElementById("apellidos").textContent =usuario.apellido;
    document.getElementById("telefono").textContent =usuario.telefono;
    document.getElementById("correo").textContent =usuario.correo;
    document.getElementById("fecha").textContent =usuario.fecha;
    document.getElementById("nacionalidad").textContent =usuario.nacionalidad;

    result.classList.remove("hidden");
    result.scrollIntoView({ behavior: "smooth" });
  } else {
    alert("El usuario no esta agregado.");
    result.classList.add("hidden");
  }
  document.getElementById("Consultar").value = "";
  
}

function consultarUsuarioPorNombre() {
  let usuarioEncontrado = false;
  let nombre = document.getElementById("Consultar").value;
  for (let id in usuarios) {
    if (usuarios[id].nombre === nombre) {
    
      document.getElementById("id").textContent = usuarios[id].id;
      document.getElementById("nombre").textContent =usuarios[id].nombre;
      document.getElementById("apellidos").textContent =usuarios[id].apellido;
      document.getElementById("telefono").textContent =usuarios[id].telefono;
      document.getElementById("correo").textContent =usuarios[id].correo;
      document.getElementById("fecha").textContent =usuarios[id].fecha;
      document.getElementById("nacionalidad").textContent =usuarios[id].nacionalidad;
      result.classList.remove("hidden");
      result.scrollIntoView({ behavior: "smooth" });
      usuarioEncontrado = true;
      break;  
    }
  }
  if (!usuarioEncontrado) {
    alert("El usuario no esta agregado.");
    result.classList.add("hidden");
}
  document.getElementById("Consultar").value = "";

}


function consultarUsuarioPorApellido() {
  let usuarioEncontrado = false;
  let apellido = document.getElementById("Consultar").value;
  for (let id in usuarios) {
    if (usuarios[id].apellido === apellido) {
    
      document.getElementById("id").textContent = usuarios[id].id;
      document.getElementById("nombre").textContent =usuarios[id].nombre;
      document.getElementById("apellidos").textContent =usuarios[id].apellido;
      document.getElementById("telefono").textContent =usuarios[id].telefono;
      document.getElementById("correo").textContent =usuarios[id].correo;
      document.getElementById("fecha").textContent =usuarios[id].fecha;
      document.getElementById("nacionalidad").textContent =usuarios[id].nacionalidad;
      result.classList.remove("hidden");
      result.scrollIntoView({ behavior: "smooth" });
      usuarioEncontrado = true;
      break;  
    }
  }
  if (!usuarioEncontrado) {
    alert("El usuario no esta agregado.");
    result.classList.add("hidden");
}
  document.getElementById("Consultar").value = "";

}


formInsertar.addEventListener("submit", function(event) {
  
  event.preventDefault();
  console.log('entro'); 
  let id = document.getElementById("ID").value;
  let nombre = document.getElementById("Nombres").value;
  let apellido = document.getElementById("Apellidos").value;
  let telefono = document.getElementById("Telefono").value;
  let correo = document.getElementById("Correo").value;
  let fecha = document.getElementById("Fecha").value;
  let nacionalidad = document.getElementById("Nacionalidad").value;
  
  if (id.trim() === "" || nombre.trim() === "" || apellido.trim() === "" || telefono.trim() === "" || correo.trim() === "" || fecha.trim() === ""|| nacionalidad.trim() === "") {
    alert("Por favor, completa todos los campos.");
    }else{
  let usuario = {
    id: id,
    nombre:nombre,
    apellido: apellido,
    telefono: telefono,
    correo: correo,
    fecha: fecha,
    nacionalidad: nacionalidad
  };

  usuarios[id] = usuario;


  document.getElementById("ID").value = "";
  document.getElementById("Nombres").value = "";
  document.getElementById("Apellidos").value = "";
  document.getElementById("Telefono").value = "";
  document.getElementById("Correo").value = "";
  document.getElementById("Fecha").value = "";
  document.getElementById("Nacionalidad").value = "";

  result.classList.add("hidden");
  llenarTablaUsuarios();
  resultUsu.scrollIntoView({ behavior: "smooth" });
  document.getElementById("bAgr").classList.remove("hidden");
  document.getElementById("bMod").classList.add("hidden");
  }
});



function eliminar(){
  
  let id = document.getElementById("Eliminar").value;

  
  if (usuarios.hasOwnProperty(id)) {
    
    delete usuarios[id];
    alert("El usuario con ID:"+id+' se ha eliminado');
  } else {
    alert("El usuario no esta agregado.");
  }
  result.classList.add("hidden");
  document.getElementById("Eliminar").value = "";
  llenarTablaUsuarios();
}

function modificar(){
  let id = document.getElementById("Modificar").value;

  
  if (usuarios.hasOwnProperty(id)) {
    
    delete usuarios[id];
    alert("Ingresa los nuevos datos en el formulario");
    document.getElementById("bAgr").classList.add("hidden");
    document.getElementById("bMod").classList.remove("hidden");
  } else {
    alert("El usuario no esta agregado.");
  }
  result.classList.add("hidden");
  document.getElementById("Modificar").value = "";

}

function llenarTablaUsuarios() {
  let tabla = document.getElementById("tablaUsuarios");
  tabla.innerHTML = "";
  
  if(Object.keys(usuarios).length >0){
    document.getElementById("resultUsu").classList.remove("hidden");
    document.getElementById("resultNo").classList.add("hidden");
  }else{
    document.getElementById("resultUsu").classList.add("hidden");
    document.getElementById("resultNo").classList.remove("hidden");
    
  }

  for (let id in usuarios) {
    let usuario = usuarios[id];
    let fila = document.createElement("tr");

    let celdaID = document.createElement("td");
    celdaID.textContent = usuario.id;
    fila.appendChild(celdaID);

    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = usuario.nombre;
    fila.appendChild(celdaNombre);

    let celdaApellido = document.createElement("td");
    celdaApellido.textContent = usuario.apellido;
    fila.appendChild(celdaApellido);

    let celdaNacionalidad = document.createElement("td");
    celdaNacionalidad.textContent = usuario.nacionalidad;
    fila.appendChild(celdaNacionalidad);

    let celdaTelefono = document.createElement("td");
    celdaTelefono.textContent = usuario.telefono;
    fila.appendChild(celdaTelefono);

    let celdaCorreo = document.createElement("td");
    celdaCorreo.textContent = usuario.correo;
    fila.appendChild(celdaCorreo);

    let celdaFecha = document.createElement("td");
    celdaFecha.textContent = usuario.fecha;
    fila.appendChild(celdaFecha);

    tabla.appendChild(fila);
  }
}

function ClickInicio(){
  ModuloUsuarios.classList.add("hidden");
  ModuloJuegos.classList.add("hidden");
  ModuloCompras.classList.add("hidden");
  ModuloInicio.classList.remove("hidden");
  ModuloFidelizacion.classList.add("hidden");
}

function ClickUsuarios(){
  ModuloUsuarios.classList.remove("hidden");
  ModuloJuegos.classList.add("hidden");
  ModuloCompras.classList.add("hidden");
  ModuloInicio.classList.add("hidden");
  ModuloFidelizacion.classList.add("hidden");
}

function ClickJuegos(){
  ModuloUsuarios.classList.add("hidden");
  ModuloJuegos.classList.remove("hidden");
  ModuloCompras.classList.add("hidden");
  ModuloInicio.classList.add("hidden");
  ModuloFidelizacion.classList.add("hidden");
}

function ClickCompras(){
  ModuloUsuarios.classList.add("hidden");
  ModuloJuegos.classList.add("hidden");
  ModuloCompras.classList.remove("hidden");
  ModuloInicio.classList.add("hidden");
  ModuloFidelizacion.classList.add("hidden");
  llenarTablaJuegosCompra()
  llenarTablaUsuariosCompra()
}

function ClickFidelizacion(){
  ModuloUsuarios.classList.add("hidden");
  ModuloJuegos.classList.add("hidden");
  ModuloCompras.classList.add("hidden");
  ModuloInicio.classList.add("hidden");
  ModuloFidelizacion.classList.remove("hidden");
  tablaPuntos()
}


function AgregarJuego(){
  

  let NombreJuego = document.getElementById("NombreJuego").value;
  let Tematica = document.getElementById("Tematica").value;
  let Costo = document.getElementById("Costo").value;
  let Puntos = document.getElementById("Puntos").value;
 
    if (NombreJuego.trim() === "" || Tematica.trim() === "" || Costo.trim() === "" || Puntos.trim() === "") {
    alert("Por favor, completa todos los campos.");
    }else{
    IDJuego++;
    let juego = {
    IDJuego:IDJuego,
    NombreJuego: NombreJuego,
    Tematica:Tematica,
    Costo: Costo,
    Puntos: Puntos,
  };

  juegos[IDJuego] = juego;


  document.getElementById("NombreJuego").value = "";
  document.getElementById("Tematica").value = "";
  document.getElementById("Costo").value = "";
  document.getElementById("Puntos").value = "";


  llenarTablaJuegos();
  document.getElementById("resultJuegos").scrollIntoView({ behavior: "smooth" });
}
}

function eliminarJuego(){
  
  let id = document.getElementById("EliminarJuego").value;

  
  if (juegos.hasOwnProperty(id)) {
    
    delete juegos[id];
    alert("El juego con ID:"+ id +' se ha eliminado');
  } else {
    alert("El juego no esta agregado.");
  }
 
  document.getElementById("EliminarJuego").value = "";
  llenarTablaJuegos();

}

function llenarTablaJuegos() {
  let tabla = document.getElementById("tablaJuegos");
  tabla.innerHTML = "";
  
  if(Object.keys(juegos).length >0){
    document.getElementById("resultJuegos").classList.remove("hidden");
    document.getElementById("resultNoJuegos").classList.add("hidden");
  }else{
    document.getElementById("resultJuegos").classList.add("hidden");
    document.getElementById("resultNoJuegos").classList.remove("hidden");
    
  }

  for (let IDJuego in juegos) {
    let juego = juegos[IDJuego];
    let fila = document.createElement("tr");

    let celdaID = document.createElement("td");
    celdaID.textContent = juego.IDJuego;
    fila.appendChild(celdaID);

    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = juego.NombreJuego;
    fila.appendChild(celdaNombre);

    let celdaApellido = document.createElement("td");
    celdaApellido.textContent = juego.Tematica;
    fila.appendChild(celdaApellido);

    let celdaNacionalidad = document.createElement("td");
    celdaNacionalidad.textContent = juego.Costo;
    fila.appendChild(celdaNacionalidad);

    let celdaCorreo = document.createElement("td");
    celdaCorreo.textContent = juego.Puntos;
    fila.appendChild(celdaCorreo);

    tabla.appendChild(fila);
  }
}

function llenarTablaJuegosCompra() {
  let tabla = document.getElementById("tablaJuegosCompra");
  tabla.innerHTML = "";
  
  if(Object.keys(juegos).length >0){
    document.getElementById("resultJuegosCompra").classList.remove("hidden");
    document.getElementById("resultNoJuegosCompra").classList.add("hidden");
  }else{
    document.getElementById("resultJuegosCompra").classList.add("hidden");
    document.getElementById("resultNoJuegosCompra").classList.remove("hidden");
    
  }

  for (let IDJuego in juegos) {
    let juego = juegos[IDJuego];
    let fila = document.createElement("tr");

    let celdaID = document.createElement("td");
    celdaID.textContent = juego.IDJuego;
    fila.appendChild(celdaID);

    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = juego.NombreJuego;
    fila.appendChild(celdaNombre);

    let celdaApellido = document.createElement("td");
    celdaApellido.textContent = juego.Tematica;
    fila.appendChild(celdaApellido);

    let celdaNacionalidad = document.createElement("td");
    celdaNacionalidad.textContent = juego.Costo;
    fila.appendChild(celdaNacionalidad);

    let celdaCorreo = document.createElement("td");
    celdaCorreo.textContent = juego.Puntos;
    fila.appendChild(celdaCorreo);

    tabla.appendChild(fila);
  }
  }


function llenarTablaUsuariosCompra() {
  let tabla = document.getElementById("tablaUsuariosCompra");
  tabla.innerHTML = "";
  
  if(Object.keys(usuarios).length >0){
    document.getElementById("resultUsuCompra").classList.remove("hidden");
    document.getElementById("resultNoCompra").classList.add("hidden");
  }else{
    document.getElementById("resultUsuCompra").classList.add("hidden");
    document.getElementById("resultNoCompra").classList.remove("hidden");
    
  }

  for (let id in usuarios) {
    let usuario = usuarios[id];
    let fila = document.createElement("tr");

    let celdaID = document.createElement("td");
    celdaID.textContent = usuario.id;
    fila.appendChild(celdaID);

    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = usuario.nombre;
    fila.appendChild(celdaNombre);

    let celdaApellido = document.createElement("td");
    celdaApellido.textContent = usuario.apellido;
    fila.appendChild(celdaApellido);

    let celdaNacionalidad = document.createElement("td");
    celdaNacionalidad.textContent = usuario.nacionalidad;
    fila.appendChild(celdaNacionalidad);

    let celdaTelefono = document.createElement("td");
    celdaTelefono.textContent = usuario.telefono;
    fila.appendChild(celdaTelefono);

    let celdaCorreo = document.createElement("td");
    celdaCorreo.textContent = usuario.correo;
    fila.appendChild(celdaCorreo);

    let celdaFecha = document.createElement("td");
    celdaFecha.textContent = usuario.fecha;
    fila.appendChild(celdaFecha);

    tabla.appendChild(fila);
  }
}

function resumenCompra() {
  
  let id = document.getElementById("usuarioCompra").value;
  let idR = document.getElementById("juegoCompra").value;
  
  if (usuarios.hasOwnProperty(id)) {
    
    let usuario = usuarios[id];
    document.getElementById("idUsuarioC").textContent = usuario.id;
    document.getElementById("nombreUsuarioC").textContent =usuario.nombre;

    if (juegos.hasOwnProperty(idR)) {
      let juego = juegos[idR];
      document.getElementById("idJuegoC").textContent =juego.IDJuego;
      document.getElementById("costoC").textContent =(juego.Costo);
      document.getElementById("IVA").textContent =(juego.Costo)*0.16;
      document.getElementById("ImpuestoEsp").textContent =(juego.Costo)*0.16*0.04;
      document.getElementById("Total").textContent =Number(juego.Costo)+Number(juego.Costo*0.16)+Number(juego.Costo*0.16*0.04);
      document.getElementById("puntosC").textContent =juego.Puntos;
      
      resultCompra.classList.remove("hidden");
      resultCompra.scrollIntoView({ behavior: "smooth" });

      let idU = id;
      let nombre = usuario.nombre;

      if(puntos.hasOwnProperty(id)){
        
      let Puntos = Number(puntos[id].Puntos)+Number(juego.Puntos);
     
      let usuarioP = {
        idU:idU,
        nombre: nombre,
        Puntos: Puntos,
      };

      puntos[id]=usuarioP
      }else{
        let Puntos = Number(juego.Puntos);
     
        let usuarioP = {
          idU:idU,
          nombre: nombre,
          Puntos: Puntos,
        };
  
        puntos[id]=usuarioP
      }

    }else {
    alert("La juego no esta agregado.");
    resultCompra.classList.add("hidden");
    }
  } else {
    alert("El usuario no esta agregado.");
    resultCompra.classList.add("hidden");
  }
  document.getElementById("usuarioCompra").value = "";
  document.getElementById("juegoCompra").value = "";

  } 

function tablaPuntos(){
  let tabla = document.getElementById("tablaUsuariosPuntos");
  tabla.innerHTML = "";
  
  if(Object.keys(puntos).length >0){
    document.getElementById("resultUsuPuntos").classList.remove("hidden");
    document.getElementById("resultNoPuntos").classList.add("hidden");
  }else{
    document.getElementById("resultUsuPuntos").classList.add("hidden");
    document.getElementById("resultNoPuntos").classList.remove("hidden");
    
  }

  for (let id in puntos) {
    let punto = puntos[id];
    let fila = document.createElement("tr");

    let celdaID = document.createElement("td");
    celdaID.textContent = punto.idU;
    fila.appendChild(celdaID);

    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = punto.nombre;
    fila.appendChild(celdaNombre);

    let celdaApellido = document.createElement("td");
    celdaApellido.textContent = punto.Puntos;
    fila.appendChild(celdaApellido);



    tabla.appendChild(fila);
  }

}