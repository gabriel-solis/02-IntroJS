/**
 * Crea un código para llenar un objecto vacio:
 * 
 * const objeto = {}
 * 
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    * 
*/

const objeto = {}
objeto["color","tamaño","peso","cantidad"]
var prop = Object.getOwnPropertyNames(objeto)
console.log(prop)
