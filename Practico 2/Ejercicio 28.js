document.querySelector("#btnEquipo1").addEventListener("click", fCalcular)

let puntajeEquipo1 = 0
function fCalcular(){
    puntajeEquipo1++
document.querySelector("#pResultadoE1").innerHTML = puntajeEquipo1

if (puntajeEquipo1 >=30){
   document.querySelector("#btnEquipo1").setAttribute("disabled","disabled")
   
}

}

document.querySelector("#btnEquipo2").addEventListener("click", fCalcular2)
let puntajeEquipo2 = 0

function fCalcular2(){
    puntajeEquipo2++
    document.querySelector("#pResultadoE2").innerHTML = puntajeEquipo2
if (puntajeEquipo2 >= 30){
       document.querySelector("#btnEquipo2").setAttribute("disabled","disabled")
    
}

document.querySelector("#pResultadoE2").innerHTML = puntajeEquipo2
}