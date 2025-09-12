//Ingresar tres valores y calcular el primero elevado al cuadrado menos la suma de los otras dos.

document.querySelector("#btnMostrar").addEventListener("click", fValores)

let valor1
let valor2
let valor3
function fValores(){
      valor1 = Number(document.querySelector("#txtValor1").value)
      valor2 = Number(document.querySelector("#txtValor2").value)
      valor3 = Number(document.querySelector("#txtValor3").value)
     resultado = (valor1 * valor1 ) - (valor2 + valor3)
     document.querySelector("#pResultado").innerHTML = resultado




    } 
