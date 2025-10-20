function esBisiesto(year){
    let bisiesto = false
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
      return true
    }
    return bisiesto
}
console.log(esBisiesto(1999))
console.log(esBisiesto(1900))
console.log(esBisiesto(2100))
console.log(esBisiesto(1600))
console.log(esBisiesto(2000))
console.log(esBisiesto(2400))
