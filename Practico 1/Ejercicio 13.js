document.querySelector("#btnAcumular").addEventListener("click", fAcumular)

let acumulador = 0

function fAcumular(){


acumulador ++ 

document.querySelector("#pResultado").innerHTML = acumulador
} 