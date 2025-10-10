document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
let matricula = document.querySelector("#txtTexto").value
let letras = 0
let numero = 0
let noEsLetraNumero = false
matricula = matricula.toUpperCase()

if (matricula.length === 7){
        document.querySelector("#pResultado").innerHTML = "Matricula valida"

}else {document.querySelector("#pResultado").innerHTML = "Matricula invalida"}

for (let i = 0; i < matricula.length; i++){
if (matricula.charCodeAt(i)>= 0 && matricula.charCodeAt(i) <=47 || matricula.charCodeAt(i)>= 91 && matricula.charCodeAt(i) >122){
    noEsLetraNumero = true
}
}



for (let i =0; i < matricula.length; i++ ){
    if (matricula.charCodeAt(i)>=65 && matricula.charCodeAt(i) <=90 ){
        letras++
    }else if(matricula.charCodeAt(i)>= 48 && matricula.charCodeAt(i) <=57){
        numero++
    }
}

if(noEsLetraNumero){
     document.querySelector("#pResultado").innerHTML = "Matricula invalida"
    
}else if (  (matricula.length === 7 && letras === 3 && numeros === 4) || (matricula.length === 7 && letras === 1 && numeros === 6)){
document.querySelector("#pResultado").innerHTML = "Matricula valida"
    }else{
        document.querySelector("#pResultado").innerHTML = "Matricula invalida"
    }
}
