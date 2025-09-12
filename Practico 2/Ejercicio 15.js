document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){

    let codigo = document.querySelector("#txtIngresarCodigo").value

    switch (codigo){
    case "A":
        document.querySelector("#pResultado").innerHTML = "Canelones"
        break
        case "B":
        document.querySelector("#pResultado").innerHTML  = "Maldonado"
        break
        case "C":
        document.querySelector("#pResultado").innerHTML  = "Rocha"
        break
        case "D":
        document.querySelector("#pResultado").innerHTML  = "Treinta y Tres"
        break
        case "E":
        document.querySelector("#pResultado").innerHTML  = "Rivera"
        break
        case "F":
        document.querySelector("#pResultado").innerHTML  = "Artigas"
        break
        case "G":
        document.querySelector("#pResultado").innerHTML  = "Salto"
        break
        case "H":
        document.querySelector("#pResultado").innerHTML  = "Paysandu"
        break
        case "I":
        document.querySelector("#pResultado").innerHTML = "Rio negro"
        break
        case "J":
        document.querySelector("#pResultado").innerHTML  = "Soriano"
        break
        case "K":
        document.querySelector("#pResultado").innerHTML  = "Colonia"
        break
        case "L":
        document.querySelector("#pResultado").innerHTML  = "CanSan Jose"
        break
        case "M":
        document.querySelector("#pResultado").innerHTML  = "Flores"
        break
        case "Ñ":
        document.querySelector("#pResultado").innerHTML  = "Flores"
        break
        case "O":
        document.querySelector("#pResultado").innerHTML  = "Florida"
        break
        case "P":
        document.querySelector("#pResultado").innerHTML  = "lavalleja"
        break
        case "Q":
        document.querySelector("#pResultado").innerHTML  = "Durazno"
        break
        case "R":
        document.querySelector("#pResultado").innerHTML  = "Tacuarembo"
        break
        case "S":
        document.querySelector("#pResultado").innerHTML  = "Montevideo"
        break
       


    }
}