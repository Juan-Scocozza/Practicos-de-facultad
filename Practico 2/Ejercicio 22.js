document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
let compra = Number(document.querySelector("#txtTtotalDeCompra").value)
let descuento 
let totalCompra 
let tarjeta = document.querySelector("#slcTarjeta").value

if (tarjeta === "SI" && compra < 10000){
    totalCompra = compra * 0.96
}else totalCompra = compra

document.querySelector("#pResultado").innerHTML = "Total a pagar  " + totalCompra







}