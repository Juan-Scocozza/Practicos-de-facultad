document.querySelector("#btnGuardar").addEventListener("click", fCalcular)
let numero1
let intentos = 0
function fCalcular (){
    
  
 numero1 =Number(document.querySelector("#txtNumero1").value)
}

document.querySelector("#btnAdivinar").addEventListener("click", fAdivinar)

function fAdivinar(){
let numero2 = Number(document.querySelector("#txtNumero2").value)
intentos ++

if (numero2 === numero1){
    
        document.querySelector("#pResultado").innerHTML = "¡Ganaste en " + intentos + " intento!"
    } else {
 
        let diferencia;
        if (numero2 > numero1) diferencia = numero2 - numero1
        else diferencia = numero1 - numero2

        let mensaje = ""
        if (diferencia > 15) mensaje = "Estás lejos."
        else if (diferencia >= 10) mensaje = "Te estás acercando."
        else if (diferencia >= 5) mensaje = "Cada vez más cerca."
        else if (diferencia >= 1) mensaje = "Muy pero muy cerca."

        document.querySelector("#pResultado").innerHTML = mensaje + " Intentos: " + intentos
    }

}