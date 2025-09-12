document.querySelector("#btnCalcular").addEventListener("click", fSolucion)

function fSolucion (){

let numero = Number(document.querySelector("#txtNumero").value)

if(numero % 7 === 0 && numero % 3 === 0) {
   document.querySelector("#pResultado").innerHTML = "Es multiplo de ambos"
}else{ (numero % 7 !== 0 && numero % 3 !== 0)
    document.querySelector("#pResultado").innerHTML = "No es multiplo de 7 y 3"
}

}