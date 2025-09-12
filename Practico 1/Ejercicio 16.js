document.querySelector("#btnCalcular").addEventListener("click", fMostrarPuntos)
let partidosGanados 
let partidosEmpatados  
let PartidosPerdidos  

function fMostrarPuntos(){
    partidosGanados = Number(document.querySelector("#txtPartidosGanados").value)
    partidosEmpatados = Number(document.querySelector("#txtPartidosEmpatados").value)
    PartidosPerdidos = Number(document.querySelector("#txtPartidosPerdidos").value)
    let totalDePuntos = (partidosGanados * 3) + (partidosEmpatados * 1)

    document.querySelector("#pResultado").innerHTML = totalDePuntos




} 
