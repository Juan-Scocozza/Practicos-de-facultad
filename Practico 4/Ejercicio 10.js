document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular (){
let texto = document.querySelector("#txtTexto").value
let suma = 0


for (let i = 0; i <texto.length; i++){
    
  let caracter = texto.charAt(i)

  if (!isNaN(caracter) && caracter !== " ") {
            suma = Number(caracter) + suma
        }
    }


    document.querySelector("#pResultado").innerHTML = "La suma de los números es: " + suma



}

