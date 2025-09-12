//Imprimir todos los números enteros del -100 al 10.
let parrafo = " "

for(i = 10; i > -100; i--){
    parrafo += i + "<br>"
}
document.querySelector("#pResultado").innerHTML = parrafo