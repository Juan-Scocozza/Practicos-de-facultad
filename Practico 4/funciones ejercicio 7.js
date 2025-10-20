function invertirTexto(texto){
    let textoInvertido = ""
for (let i=texto.length-1; i>= 0;i--){
    textoInvertido += texto.charAt(i) 
}
return textoInvertido

}
console.log(invertirTexto("Hola mundo"))