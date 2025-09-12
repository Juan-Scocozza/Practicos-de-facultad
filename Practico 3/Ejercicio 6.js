//Imprimir todos los números múltiplos de 4 que hay entre -33 y 230.

let parrafo = ""

for (i = -33; i <= 230; i ++){

    if (i%4 === 0){
        parrafo += i + "<br>"
    }
    document.querySelector("#pResultado").innerHTML = parrafo
}