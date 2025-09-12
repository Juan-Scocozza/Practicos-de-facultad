let nombre;
let apellido;
document.querySelector("#btnSumar").addEventListener("click", sumarValores);

function sumarValores(){
     let nombre = document.querySelector("#txtNombre").value;
    let apellido = document.querySelector("#txtApellido").value;

     let resultado = apellido + ", " + nombre;
     document.querySelector("#pResultado").innerHTML = resultado;

}