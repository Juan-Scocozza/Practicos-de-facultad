document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
let contraseña= document.querySelector("#txtTexto").value
let error = ""
let tieneNumero = false
let tieneEspecial = false
let tieneMay = false
let tieneMin = false
let contraseñaFinal
let espacio = false
document.querySelector("#pResultado").innerHTML= ""


   
if (contraseña.length<5){
    document.querySelector("#pResultado").innerHTML = error += "La contraseña debe tener mas de 5 caracteres" + "<br>"
}
if (!isNaN (contraseña.charAt(0))){

    document.querySelector("#pResultado").innerHTML = error += "La contraseña no puede arrancar con un numero" +"<br>"
}
for (let i= 0; i < contraseña.length; i++){

if (contraseña.charAt(i)=== " "){
espacio = true
}if(contraseña.charAt(i)!=="." || contraseña.charAt(i)!== "@" || contraseña.charAt(i)!== "#" || contraseña.charAt(i)!=="!"){
    tieneEspecial = true
    
}if (contraseña.charCodeAt(i)>= 48 && contraseña.charCodeAt(i)<= 57 ){
    tieneNumero = true

}if (contraseña.charCodeAt(i)>= 65 && contraseña.charCodeAt(i)<= 90 ){
    tieneMay = true

}if (contraseña.charCodeAt(i)> 97 && contraseña.charCodeAt(i)<=122){
    tieneMin = true
}

}
if(!tieneNumero){
    document.querySelector("#pResultado").innerHTML = error += "La contraseña debe contener numeros" +"<br>"
}
if(!tieneEspecial){
    document.querySelector("#pResultado").innerHTML = error += "La contraseña debe contener uno de estos caracteres (.,!,#,@)" + "<br>"
}
if (!tieneMay){
    document.querySelector("#pResultado").innerHTML = error += "La contraseña debe contener al menos una mayuscula" + "<br>"
}
if (!tieneMin){
    document.querySelector("#pResultado").innerHTML = error += "La contraseña debe contener al mmenos una minuscula" + "<br>"
}
if (espacio){document.querySelector("#pResultado").innerHTML = error += "La contraseña no puede tener espacios" + "<br>"

}
}

    
