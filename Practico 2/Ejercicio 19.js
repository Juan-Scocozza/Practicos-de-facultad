document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

//Ingresar cinco números. Indicar cuántos son múltiplos de 5, cuantos son mayores que 20 y cuantos cumplieron ambas condiciones en simultáneo.
//La solución deberá utilizar un único campo de texto y un único botón

let contador = 0 
let contadorMult5= 0
let contadorMayor20 = 0
let contadorMulyMayor20 = 0 
function fCalcular (){

let numero = Number(document.querySelector("#txtNumero").value) 

if (numero % 5 === 0 ){
    contadorMult5++
}
if(numero > 20 ){

contadorMayor20++
}

if(numero % 5 === 0 && numero > 20){
    contadorMulyMayor20++
}

contador++
if (contador === 5){

document.querySelector("#pResultado").innerHTML = "Contador multiplos de 5: " + contadorMult5 + "<br>"+
"Contador >20: " + contadorMayor20 + "<br>"+
"Ambos resultados: " + contadorMulyMayor20

}
    

}