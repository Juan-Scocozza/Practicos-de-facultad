
document.querySelector("#btnMostrar").addEventListener("click", mostrarCambio)
function mostrarCambio(){
 pesos = Number(document.querySelector("#txtPeso").value)
 tipoDeCambio = Number(document.querySelector("#txtTipodeCambio").value)
let dolares = pesos / tipoDeCambio

document.querySelector("#pMostrar").innerHTML = dolares

}