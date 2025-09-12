//Solicitar ingresos de peso y altura para calcular índice de masa corporal Se asume que el peso se ingresó en kilogramos y la altura en metros.

document.querySelector("#btnMostrar").addEventListener("click", fCalcular)
let peso
let altura
function fCalcular(){
altura = Number(document.querySelector("#txtAltura").value)
peso = Number(document.querySelector("#txtPeso").value)

let IMC = peso / (altura * altura)
document.querySelector("#pMostrar").innerHTML = IMC

    
} 