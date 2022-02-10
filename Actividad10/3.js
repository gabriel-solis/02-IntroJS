/**
  * Dadas dos matrices de enteros,
  * encuentra qué elementos faltan en la segunda matriz
  * de la primera matriz.
​
Ejemplo
​
La matriz es la lista original. Los números que faltan son
     const matriz = [7,2,5,3,5,3]
     const br = [7,2,5,4,6,3,5,3]
​
     Los números que faltan en arr son [4,6]
​
*/
const matriz = [7,2,5,3,5,3]
const br = [7,2,5,4,6,3,5,3]

var faltantes = br.filter(elem => !matriz.includes(elem))
console.log(faltantes)