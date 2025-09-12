document.querySelector("#btnIngrsar").addEventListener("click", fCalcular)
let numeroAdivinar 
let intentos = 0
function fCalcular (){
    let numero = Number(document.querySelector("#txtNumero").value)
    intentos++
    let diferencia 
    if (numero === numeroAdivinar){
        document.querySelector("#pResultado").innerHTML= "GANASTE" + intentos

    }else{
         diferencia = numeroAdivinar-numero 
    } 
    
if (diferencia > 15) {
  mensaje = "Estás lejos.";
} else if (diferencia >= 10 && diferencia <= 15) {
  mensaje = "Te estás acercando.";
} else if (diferencia >= 5 && diferencia <= 9) {
  mensaje = "Cada vez más cerca.";
} else if (diferencia >= 1 && diferencia <= 4) {
  mensaje = "Muy pero muy cerca.";
}
document.querySelector("#pResultado").innerHTML = mensaje + " Intentos: " + intentos;
}
