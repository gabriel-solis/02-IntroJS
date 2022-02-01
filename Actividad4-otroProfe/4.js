let input
let arreglo = []

while(!(input=="")){
    input = prompt("Ingrese un carácter o una palabra")
    arreglo.push(input)
}
let contador=0
let cadena=""
while(contador<arreglo.length){
    cadena= cadena + arreglo[contador]
    contador++
}
console.log(cadena)
