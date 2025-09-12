document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
let numero1 = Number(document.querySelector("#txtNumero1").value)
let numero2 = Number(document.querySelector("#txtNumero2").value)
let select= (document.querySelector("#slcOperacion").value)

switch (select){
    case "S":
        document.querySelector("#pResultado").innerHTML = numero1 + numero2
break
    
case "R":document.querySelector("#pResultado").innerHTML = numero1 - numero2
break
case "M": 
document.querySelector("#pResultado").innerHTML = numero1 * numero2
break
case "D": 
document.querySelector("#pResultado").innerHTML = numero1 / numero2
break
 


}

}