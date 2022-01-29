var num1 = parseInt(prompt("Ingrese el primer número entre 1 y 50"))
var num2 = parseInt(prompt("Ingrese el segundo número entre 1 y 50"))

var contador=1
while(contador<50){
    if(contador==num1 || contador==num2){
        console.log("¡Loteria!")
    }else{
        console.log(contador)
    }
    contador++
}
