var listaHermanos=[{
    nombre:"Esteban",
    edad:16
},
{
    nombre: "Anna",
    edad:14
},
{
    nombre:"Juan",
    edad:3
}];

var edadesHermanos=listaHermanos.map(function(edad){
    return edad.edad;
})

var nombresHermanos=listaHermanos.map(function(nombre){
    return nombre.nombre;
})

var encontrarEsteban=listaHermanos.some(function(nombre){
    return nombre.nombre === "Esteban";
})

var saludarHermanos=listaHermanos.forEach(function(hermano){
    console.log(`Hola, ${hermano.nombre}`);
})
