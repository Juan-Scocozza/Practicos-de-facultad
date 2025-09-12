document.querySelector("#btnAvisar").addEventListener("click", fCalcular)

function fCalcular(){
let numero = Number (document.querySelector("#txtNumero").value)

if (numero > 10){
    document.querySelector("#pResultado").innerHTML = "El numero es mayor que 10"
}else{(numero < 10)
    document.querySelector("#pResultado").innerHTML = "El numero es menor que 10"
}

}

