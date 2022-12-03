const nombreIngresoUsuario= document.querySelector('#nombreIngresoUsuario');
const apellidoIngresoUsuario= document.querySelector('#apellidoIngresoUsuario');
const btnIngresoDatosPersonales= document.querySelector('#btnIngresoDatosPersonales');
const impresionDatosPersonales= document.querySelector('#impresionDatosPersonales');
const generoUsuario= document.querySelector('#generoUsuario');


btnIngresoDatosPersonales.addEventListener('click',datosPersonales);


function datosPersonales() {
  const nombre=nombreIngresoUsuario.value;
  const apellido=apellidoIngresoUsuario.value;
  const genero= generoUsuario.value;

  if (genero==="mujer") {
    console.log(`Bienvenida ${nombre} ${apellido}`);
    impresionDatosPersonales.innerText = `Bienvenida ${nombre} ${apellido}`; 
  } else if(genero==="hombre"){
    console.log(`Bienvenido ${nombre} ${apellido}`);
    impresionDatosPersonales.innerHTML = `Bienvenido ${nombre} ${apellido}`; 
  } else {
    console.log("No ingresaste un genero correcto");
    impresionDatosPersonales.innerHTML = "No ingresaste un genero correcto";
  }

}
