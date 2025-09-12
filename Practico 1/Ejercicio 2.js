let numero1 
let numero2 
document.querySelector("#btnMostrar").addEventListener("click", sumarValores)

function sumarValores(){
let numero1 = Number(document.querySelector("#txtValor1").value);
let numero2 = Number(document.querySelector("#txtValor2").value);
let suma = numero1 + numero2 
document.querySelector("#pRestultado").innerHTML = suma

}