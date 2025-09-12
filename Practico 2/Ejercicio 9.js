document.querySelector("#btnIngresar").addEventListener("click", fCalcular)

function fCalcular(){
let dia = document.querySelector("#slcDias").value
let temperatura = Number(document.querySelector("#txtTemperatura").value)
let levantarse = document.querySelector("#pResultado").value


switch (dia){
        case "DO":

            document.querySelector("#pResultado1").innerHTML = "Quedarse en casa, hoy no trabaja"
       document.querySelector("#pResultado").innerHTML = "Levantarse"
        
            break 
      default:      
      document.querySelector("#pResultado1").innerHTML = "Ir al trabajo"
       document.querySelector("#pResultado").innerHTML = "Levantarse"

    }

if(temperatura < 10){
    document.querySelector("#pResultado2").innerHTML = "abrigarse mucho"
}else if (temperatura > 20){
    document.querySelector("#pResultado2").innerHTML = "ponerse ropa cómoda"
}else if (temperatura > 10 && temperatura < 20 ){
    document.querySelector("#pResultado2").innerHTML = "abrigo moderado"
}


}