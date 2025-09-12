document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular (){
let letra = document.querySelector("#txtCaracter").value

switch (letra){
case "A":
document.querySelector("#pResultado").innerHTML = "Es vocal"
break
case "E":
document.querySelector("#pResultado").innerHTML = "Es vocal"
break
case "I":
document.querySelector("#pResultado").innerHTML = "Es vocal"
break
case "O":
document.querySelector("#pResultado").innerHTML = "Es vocal"
break
case "U":
document.querySelector("#pResultado").innerHTML = "Es vocal"
break
default: 
document.querySelector("#pResultado").innerHTML = "No es vocal"

}
}