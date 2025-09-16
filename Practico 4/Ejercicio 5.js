document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
let patente = document.querySelector("#txtTexto").value.toUpperCase()
let respuesta = ""
switch (patente.charAt(0)){
    case "A":
     respuesta = "Canelones"
     break
      case "B":
     respuesta = "Maldonado"
     break
 case "C":
     respuesta = "Rocha"
     break
      case "D":
     respuesta = "Treinta y Tres"
     break
      case "E":
     respuesta = "Cerro Largo"
     break
      case "F":
     respuesta = "Rivera"
     break
      case "G":
     respuesta = "Artigas"
     break
      case "H":
     respuesta = "Salto"
     break
      case "I":
     respuesta = "Paysandu"
     break
      case "J":
     respuesta = "Rio Negro"
     break
      case "K":
     respuesta = "Soriano"
     break
      case "L":
     respuesta = "Colonia"
     break
      case "M":
     respuesta = "San Jose"
     break
      case "N":
     respuesta = "Flores"
     break
      case "O":
     respuesta = "Florida"
     break
      case "P":
     respuesta = "Lavalleja"
     break
      case "Q":
     respuesta = "Durazno"
     break
      case "R":
     respuesta = "Tacuarembo"
     break
      case "S":
     respuesta = "Montevideo"
     break
default: respuesta = "Letra no valida" 
    }
document.querySelector("#pResultado").innerHTML = "La matricula corresponde " + respuesta


}