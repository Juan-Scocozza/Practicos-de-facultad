

document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular (){
 let texto = document.querySelector("#txtTexto").value
 texto = texto.toLowerCase()
    let vocales = 0
 let consonantes = 0
 

for (let i= 0; i < texto.length; i++){
    let caracter = texto.charAt(i)
    if (caracter === "a" || caracter === "e" || caracter === "i" || caracter === "o" || caracter === "u") {
            vocales++
    }else consonantes++
}

if(texto.length>10){
    document.querySelector("#pResultado").innerHTML = "La cantidad de vocales es " + vocales
}else if(texto.length <= 10){
document.querySelector("#pResultado").innerHTML =  "La cantidad de consonantes es " + consonantes

}

}