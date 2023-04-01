var usuario_opcion= prompt("Quisieras iniciar el juego?: ")

while(usuario_opcion == "si"){
    var frutas=["Kiwi","Manzana","Fresa"];
    console.log(frutas);

    var usuario=prompt("Quieres eliminar el primer o segundo elemento?")

    if(usuario == "primero"){
        frutas.shift();
        console.log(frutas);
    }else if(usuario == "segundo"){
        frutas.pop();
        console.log(frutas);
    }
    var usuario_opcion= prompt("Quisieras iniciar el juego?: ")
}