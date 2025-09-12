 //Ingresar un número entre 2 y 50 y dibujar en pantalla una línea compuesta por
  //guiones.
  //La línea tendrá tantos guiones como el número ingresado.
let guiones = "-"
let cantidad = 12
let parrafo = ""
for (i =1; i <=cantidad;i++){

      parrafo += guiones
}
    document.querySelector("#pResultado").innerHTML= parrafo

