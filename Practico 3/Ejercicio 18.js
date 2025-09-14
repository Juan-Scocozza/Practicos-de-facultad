document.querySelector("#btncalcular").addEventListener("click", fCalcular)

function fCalcular (){
let numero = Number (document.querySelector("#txtNumero").value)
let resultado = ""

if (numero === 0 ){

     resultado = " No se puede dividir entre 0"
}
for (let i= 31; i <= 200; i++){

if (i % numero === 0 && i % 2 === 0){
resultado += i + "<br>"
}
document.querySelector("#pResultado").innerHTML = resultado
}



}