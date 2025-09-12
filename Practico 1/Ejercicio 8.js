//Ingresar tres valores y calcular la suma de los primeros dos menos el tercero
document.querySelector("#btnMostrar").addEventListener("click", fValores)

let valor1
let valor2
let valor3

function fValores(){
     let valor1 = Number(document.querySelector("#txtValor1").value)
     let valor2 = Number(document.querySelector("#txtValor2").value)
     let valor3 = Number(document.querySelector("#txtValor3").value)
     let resultado = valor1 + valor2 - valor3
     document.querySelector("#pResultado").innerHTML = resultado




    } 

