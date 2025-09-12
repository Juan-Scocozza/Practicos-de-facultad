//Imprimir todos los números enteros del 1 al 1.000 (un número por línea).

let parrafo =""

for (i = 1; i <= 1000; i++ ){
    parrafo += i + "<br>"
}
document.querySelector("#pResultado").innerHTML = parrafo
