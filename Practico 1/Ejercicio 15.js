let acumular = 0
let parrafo = 
document.querySelector("#pResultado")
document.querySelector("#btnAcumular").addEventListener("click", fAvalor)
document.querySelector("#btnMostrar").addEventListener("click", mostrarResultado)

function fAvalor (){
let valorIngresado = Number(document.querySelector("#txtValor").value)
document.querySelector("#txtValor").value = ""

acumular += valorIngresado
console.log(acumular)
//parrafo.innerHTML = ""

    } 
    function mostrarResultado (){
parrafo.innerHTML= acumular 


    } 