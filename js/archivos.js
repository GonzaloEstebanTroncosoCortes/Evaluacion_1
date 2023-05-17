var primerNombre = document.getElementById("primerNombre");
var segundoNombre= document.getElementById("segundoNombre");
var primerApellido = document.getElementById("apellidoPaterno");
var segundoApellido = document.getElementById("apellidoMaterno");
var genero = document.getElementById("genero");
var rut = document.getElementById("rut");
var direccion = document.getElementById("direccion");
var correo= document.getElementById("correo");
var telefono= document.getElementById("telefono");

var error = document.getElementById("error");

function enviarformulario(){
    console.log("enviando formulario");
    var mensajesError = [];

    if(primerNombre.value === null || primerNombre.value.trim() === ""){
        mensajesError.push("Ingresa tu primer nombre");
    }
    if(segundoNombre.value === null || segundoNombre.value.trim() === ""){
        mensajesError.push("Ingresa tu segundo nombre");
    }
    if(primerApellido.value === null || primerApellido.value.trim() === ""){
        mensajesError.push("Ingresa tu primer apellido");
    }
    if(segundoApellido.value === null || segundoApellido.value.trim() === ""){
        mensajesError.push("Ingresa tu segundo apellido");
    }
    if(genero.value === null || genero.value === ""){
        mensajesError.push("Ingresa tu genero");
    }
    if(rut.value === null || rut.value.trim() === ""){
        mensajesError.push("Ingresa tu rut");
    }
    if(direccion.value === null || direccion.value.trim() === ""){
        mensajesError.push("Ingresa tu direccion");
    }
    if(correo.value === null || correo.value.trim() === ""){
        mensajesError.push("Ingresa tu correo");
    }
    if(telefono.value === null || telefono.value.trim() === ""){
        mensajesError.push("Ingresa tu telefono");
    }
 
    error.innerHTML =  mensajesError.join(",<br>");
    return mensajesError.length === 0;
};

function validarPrimerNombreNumero() {
    const primerNombre = document.getElementById("primerNombre").value.trim();
    if (primerNombre.length < 5 || primerNombre.length > 30) {
      alert("El primer nombre debe tener entre 5 y 30 caracteres.");
      return false;
    }
    return true;
    }
  
  function validarPrimerNombre() {
    const primerNombre = document.getElementById("primerNombre").value.trim();
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s.'-]+$/;
    if (!soloLetras.test(primerNombre)) {
      alert("El primer nombre no debe ser un número.");
      return false;
    }
    return true;
  }

function validarSegundoNombreNumero() {
    const segundoNombre = document.getElementById("segundoNombre").value.trim();
    if (segundoNombre.length < 5 || segundoNombre.length > 30) {
      alert("El segundo nombre debe tener entre 5 y 30 caracteres.");
      return false;
    }
    return true;
  }

  function validarSegundoNombre() {
    const segundoNombre = document.getElementById("segundoNombre").value.trim();
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s.'-]+$/;
    if (!soloLetras.test(segundoNombre)) {
      alert("El segundo nombre no debe ser un número.");
      return false;
    }
    return true;
  }

  function validarPrimerApellidoNumero() {
    const primerApellido = document.getElementById("primerApellido").value.trim();
    if (primerApellido.length < 5 || primerApellido.length > 30) {
      alert("El Primer Apellido debe tener entre 5 y 30 caracteres.");
      return false;
    }
    return true;
  }

  function validarPrimerApellido() {
    const primerApellido = document.getElementById("apellidoPaterno").value.trim();
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s.'-]+$/;
    if (!soloLetras.test(primerApellido)) {
      alert("El Primer Apellido no debe ser un número.");
      return false;
    }
    return true;
  }