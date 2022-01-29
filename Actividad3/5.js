var num1 = parseFloat(prompt("Ingrese el primer número"))
var num2 = parseFloat(prompt("Ingrese el segundo número"))
var num3 = parseFloat(prompt("Ingrese el tercer número"))

if(num1==num2){
    if(num1<num3){
        console.log(num3 + " es el mayor")
    }else{
        console.log(num1 + " y "+num2 + " son mayores")
    }
}else if(num1==num3){
    if(num1<num2){
        console.log(num2 + " es el mayor")
    }else{
        console.log(num1 + " y "+num3 + " son mayores")
    }
}else if(num2==num3){
    if(num2<num1){
        console.log(num1 + " es el mayor")
    }else{
        console.log(num2 + " y "+num3 + " son mayores")
    }
}else if(num1<num2){
    if(num2<num3){
        console.log(num3 + " es el mayor")
    }else{
        console.log(num2 + " es el mayor")
    }
}else if(num1<num3){
    console.log(num3 + " es el mayor")
}else{
    console.log(num1 + " es el mayor")
}