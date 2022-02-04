//ADVERTENCIA-este código no esta completo, así que no funciona (aún)
const impuesto = 0.16
const xiaomi = 5999.99
const iphone = 4599.99
const motorola = 6999.99
const huawei = 1999.99
const mica = 200
const sticker = 50
const funda = 349.99
const carcasa = 499.99
var costoFinalFinal = 0
var telefonos = ["xiaomi", "iphone", "motorola", "huawei"]
var accesoriosCel = ["mica", "sticker", "funda", "carcasa"]

var saldoCuenta = parseFloat(prompt("Ingrese el monto que tiene en su cuenta"))
const umbralGasto = parseFloat(prompt("¿Cuánto esta dispuesto a gastar?"))
var costoTotal = 0

function calcularImpuestos(totalSinImpuestos){
    return ((totalSinImpuestos * 0.16) + totalSinImpuestos)
}

function formatoCosto(total){
    alert("El total es: $"+total)
}


function costoProducto(producto){
    
    if(telefonos.includes(producto) || accesoriosCel.includes(producto)){
        if(producto == "xiaomi"){
            console.log("regresando xiaomi "+xiaomi)
            return xiaomi
        }else if(producto == "iphone"){
            return iphone
        }else if(producto == "motorola"){
            return motorola
        }else if(producto == "huawei"){
            return huawei
        }else if(producto == "mica"){
            return mica
        }else if(producto == "sticker"){
            return sticker
        }else if(producto == "funda"){
            return funda
        }else if(producto == "carcasa"){
            return carcasa
        }
    }else{
        alert("Un accesorio no es valido")
        return 0
    }
}

function calcularCostoTotal(producto){
    var totalSinImpuestos = costoProducto(producto)
    var total = calcularImpuestos(totalSinImpuestos)
    costoFinalFinal = costoFinalFinal + total
}


while(saldoCuenta>costoFinalFinal){
    
    var cel = prompt("Ingrese un producto de la siguiente lista: "+telefonos)
    calcularImpuestos(cel)
    if(umbralGasto<saldoCuenta && costoFinalFinal<saldoCuenta){
        
        while(costoFinalFinal<umbralGasto){
            var accesorio = prompt("Ingrese un accesorio de la siguiente lista: "+accesoriosCel)
            var respuesta = prompt("¿Deseas agregar otro accesorio? y=si | n=no")
            if(respuesta=="n"){
                calcularCostoTotal(accesorio)
                break
            }else if(respuesta=="y"){}
                calcularCostoTotal(accesorio)
        }
    }else{
        alert("El monto de tu cuenta debe ser mayor que el monto que quieres gastar")
    }
    
}
formatoCosto(costoFinalFinal)
