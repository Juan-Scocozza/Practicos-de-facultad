document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
let texto = document.querySelector("#txtTexto").value
  let textoInvertido = ""

  for(let i = texto.length -1; i>=0; i-- ){


    textoInvertido += texto.charAt(i)
  }

document.querySelector("#pResultado").innerHTML= textoInvertido








}