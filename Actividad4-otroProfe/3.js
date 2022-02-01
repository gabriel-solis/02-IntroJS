let input 
let arreglo = []

while(!(input==0)){
        input = parseInt(prompt("Ingrese un número"))
        arreglo.push(input)
}
arreglo.pop()
console.log(arreglo)
