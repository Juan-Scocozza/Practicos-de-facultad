document.querySelector("#btnCalcular").addEventListener("click", fCalcular)


function fCalcular (){
let ingresosComprador = Number(document.querySelector("#txtIngreso").value)
let valorCasa = Number(document.querySelector("#txtValorCasa").value)
    
    if(ingresosComprador < 20000 ){
        ingresosComprador = valorCasa * 0.15
        valorCasa = ingresosComprador - (valorCasa / 82)
        document.querySelector("#pResultado").innerHTML = "El comprador debe pagar " + ingresosComprador + " mas 82 cuotas de " + valorCasa
    }else if (ingresosComprador >= 20000){
ingresosComprador = valorCasa * 0.30
valorCasa = ingresosComprador - (valorCasa / 12)
document.querySelector("#pResultado").innerHTML = "El comprador debe pagar " +  ingresosComprador + " mas 12 cuotas de " + valorCasa

    }


}