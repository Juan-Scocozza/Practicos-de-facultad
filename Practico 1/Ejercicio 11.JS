//Ingresar un importe (sub-total), agregarle el IVA (22%) y calcular y mostrar el importe final.
document.querySelector("#btnCalcular").addEventListener("click", fCalcular)
let importe
let iva 
function fCalcular(){
importe = Number(document.querySelector("#txtImporte").value)
iva = importe * 0.22
let importeFinal = importe + iva

document.querySelector("#pMostrar").innerHTML = importeFinal
} 