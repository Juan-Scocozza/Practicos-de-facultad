document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
let texto = document.querySelector("#txtTexto").value
let textoEncriptado = ""
texto = texto.toUpperCase()

for(let i = 0; i < texto.length; i++){
    let letra = texto.charAt(i)

switch (letra){
    case "A":
    textoEncriptado += 4
    break
    case "E":
        textoEncriptado += 3
        break
        case "I":
            textoEncriptado += 1
            break
            case "O": 
            textoEncriptado += 0
            break
            case "U":
                textoEncriptado += 8
                break
                default: textoEncriptado += letra
}
document.querySelector("#pResultado").innerHTML = textoEncriptado 
}

}