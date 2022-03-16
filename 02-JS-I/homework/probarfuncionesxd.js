console.log("hola");

if (false){
    console.log("Este código será omitido")
}else if(false){
    console.log("Este código NO correrá")
}else{
    console.log("Este código correrá")
}

function args(){
    console.log(arguments)
}
args("hola", "otro parámetro", 3)

function args1(){
    return Array.isArray(arguments)
}
args1(1,2,3)