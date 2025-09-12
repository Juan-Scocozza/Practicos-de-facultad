document.querySelector("#btnIngresar").addEventListener("click", fIngresarSueldo)

let totalSueldos = 0
let CantidadSueldos = 0

let sueldoMasBajo = Number.MAX_SAFE_INTEGER
function fIngresarSueldo(){

let sueldoIngrresado = Number(document.querySelector("#txtSueldo").value)
totalSueldos += sueldoIngrresado 
CantidadSueldos ++

if(sueldoIngrresado < sueldoMasBajo){
    sueldoMasBajo = sueldoIngrresado
}
 document.querySelector("#pResultado").innerHTML =
    "Total a pagar: $" + totalSueldos + "<br>" +
    "Cantidad de empleados: " + CantidadSueldos  + "<br>" +
    "Sueldo más bajo: $" + sueldoMasBajo;
}