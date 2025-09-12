//Ingresar dos valores  y mostrar el resto de dividir el primero entre el segundo.
document.querySelector("#btnMostrar").addEventListener("click", fResto)
let valor1 
let valor2
function fResto(){
valor1 = Number(document.querySelector("#txtValor1").value)
valor2 = Number(document.querySelector("#txtValor2").value)
let resto = valor1 % valor2
document.querySelector("#pResultado").innerHTML = resto




}