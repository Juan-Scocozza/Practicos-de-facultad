document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
let numero1 = Number(document.querySelector("#txtNumero1").value)
let numero2 = Number(document.querySelector("#txtNumero2").value)
let resultado 
let cociente = 0

if (numero2 === 0 ){
    document.querySelector("#pResultado").innerHTML = "No se puede dividir entre 0"
}else{
    while (numero1 >= numero2){
        numero1 = numero1 - numero2
        cociente ++
    }
     let resto = numero1
        resultado = "Cociente = " + cociente + "<br>Resto = " + resto
}

  document.querySelector("#pResultado").innerHTML = resultado



}