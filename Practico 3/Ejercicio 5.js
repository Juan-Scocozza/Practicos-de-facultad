
//Imprimir todos los números múltiplos de 5 que hay entre 1 y 450 (inclusive).

let parrafo = " "

for (i = 5; i<= 450; i+=5){

   if( i%5 === 0) {
    parrafo += i + "<br>"
   }
}
document.querySelector("#pResultado").innerHTML = parrafo 
