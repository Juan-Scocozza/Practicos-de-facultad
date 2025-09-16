//Solicitar un texto e indicar si comienza y termina con la misma letra

let texto = "Hola mundo"
let primera = texto.charAt(0)
let ultima = texto.charAt(texto.length - 1)
 if(primera === ultima){
    (console.log("Las letras coinciden"))
 }else
 console.log("Las letras son distintas")