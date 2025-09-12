//Utilizando un plan de viajero frecuente, un cliente de una aerolínea desea consultar donde puede viajar gratis con las millas acumuladas hasta el momento.
//Las opciones son las siguientes:
//60.000 millas - Europa (destino lejano)
//30.000 millas - América del Norte (destino intermedio)
//15.000 millas — América del Sur (destino cercano)
//Si el viajero es parte del plan "Plus" sus millas rinden el doble.
//Dado un ingreso de millas acumuladas y el ingreso de si es parte del plan Plus (s-sí, n-no), indicarle al usuario cual es el destino más lejano al que puede viajar de manera gratuita, o indicarle  que no dispone de millas suficientes en caso que no alcance los mínimos.
//Tengo 17.000 millas y soy parte del plan plus - > puedo viajar a América del Norte como destino más lejano



document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
let millas = Number(document.querySelector("#txtTotalDeMillas").value)
let plus = (document.querySelector("#slcPlus").value)

if (plus === "S"){
    millas = millas * millas
}

if (millas >= 60000){
    document.querySelector("#pResultado").innerHTML = "Europa (destino lejano)"
}else if( millas >= 30000){
    document.querySelector("#pResultado").innerHTML = "América del Norte (destino intermedio)"
}else if (millas >= 15000){
    document.querySelector("#pResultado").innerHTML = "América del Sur (destino cercano)"
}else if(millas < 15000)
    document.querySelector("#pResultado").innerHTML = "No tiene millas suficientes"

}