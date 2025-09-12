document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular (){
 let nochesPagadas = Number(document.querySelector("#txtNoches").value)
    let metodoPago = document.querySelector("#slcMetodoDePago").value
    let precioPorNoche = 40
    let nochesDeRegalo = 0
//let nochesTotales = nochesPagadas + nochesDeRegalo
    let precioFinal = nochesPagadas * precioPorNoche
if (nochesPagadas >= 7){
    nochesDeRegalo = 2
    if(metodoPago === "T"){
        nochesDeRegalo = 3
    }
}else if (nochesPagadas > 3){
    nochesDeRegalo = 1
}


let nochesTotales = nochesPagadas + nochesDeRegalo
document.querySelector("#pResultado").innerHTML = "Noches de regalo: " + nochesDeRegalo + "<br>" +
        "Noches totales de alojamiento: " + nochesTotales + "<br>" +
        "Monto final a pagar: $" + precioFinal

}