// Declarativas

function miFuncion(){
    return 3;
}


// Expresión

var miFuncion = function(a,b){
    return a + b;
}

miFuncion();

function saludarEstudiantes(estudiante){
    console.log(`Hola${estudiante}`)
}

saludarEstudiantes(Esteban)


function sumar(a,b){
    var resultado = a+b;
    console.log(`Tu resultado es ${resultado}`)
}

sumar(1,2)