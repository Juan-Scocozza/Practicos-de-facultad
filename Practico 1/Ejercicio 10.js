//Ingresar un importe y un porcentaje de recarga y calcular el importe final.

document.querySelector("#btnCalcular").addEventListener("click", fCalcular)
let importe
let porcentaje
function fCalcular(){
importe = Number(document.querySelector("#txtImporte").value)
porcentaje = Number(document.querySelector("#txtPorcentaje").value)
let importeFinal = importe + (importe * porcentaje / 100)
document.querySelector("#pMostrar").innerHTML = importeFinal
} 