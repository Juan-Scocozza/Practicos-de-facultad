/*Ingresar una contraseña y validar que:
- Tenga un mínimo de 5 caracteres.
- Tenga al menos una mayúscula y una minúscula.
- No comience con número, pero si tenga al menos un número.
- No tenga espacios
- Contenga al menos uno de estos caracteres: . @ # !

Informar si cumple las condiciones y mostrar la contraseña.*/





document.querySelector("#btnCalcular").addEventListener("click", fCalcular)

function fCalcular(){
let respuesta = ""
respuesta = document.querySelector("#pResultado").innerHTML
let contrasña = document.querySelector("#txtTexto").value

if (contrasña.length()<5) {
    respuesta + "Contraseña muy corta"
}else if (contrasña)

}