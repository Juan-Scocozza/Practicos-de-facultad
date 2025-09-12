document.querySelector("#ingresarStock").addEventListener("click", fIngresar)
document.querySelector("#btnComprar").addEventListener("click", fComprar)
let stock = 0
let cantidadPedidos = 0
let mejorCliente //nombre del cliente q mas compro
let mejorCompra = 0 //mas unidades




function fIngresar(){


    stock += Number(document.querySelector("#txtStockInidicial").value)
    document.querySelector("#btnComprar").removeAttribute("disabled")



}




function fComprar (){
let nombre = (document.querySelector("#txtNombreCliente").value)
let unidades = Number(document.querySelector("#txtUnidades").value)
document.querySelector("#pResultado").innerHTML = ""
if(stock >= unidades){
    cantidadPedidos++
    stock = stock - unidades
}else{
    //las unidades no pueden superar al stock 
}

if (stock === 0 ){
    //se desactiva el boton 
    //cantidad de pedidos 
    //nombre de quien compro mas 
    document.querySelector("#btnComprar").setAttribute("disabled", "disabled")
}
if(mejorCompra < unidades){
    mejorCompra = unidades
    mejorCliente = nombre
}
 document.querySelector("#pResultado").innerHTML =
        "Stock restante: " + stock + "<br>" +
        "Cantidad de pedidos procesados: " + cantidadPedidos + "<br>" +
        "Mejor cliente  " + (mejorCliente || "-") + " (" + mejorCompra + " unidades)"
}