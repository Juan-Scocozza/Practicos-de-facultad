document.querySelector("#btnPresionar").addEventListener("click", fCalcular)

function fCalcular (){

    let numero = Number (document.querySelector("#txtNumero").value)
    if (numero > 20){
        document.querySelector("#pResultado").innerHTML = "Es mayor que 20"
    }else{(numero < 20)
        document.querySelector("#pResultado").innerHTML = "Es menor que 20"}
    
}