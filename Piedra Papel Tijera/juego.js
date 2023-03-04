var contador_usuario=0;
var contador_computadora=0;

var usuario;
var opciones_computadora=["piedra","papel","tijera"];
var computadora;
var ronda=0;

while (contador_usuario < 3 && contador_computadora < 3){
    var usuario=prompt("piedra, papel o tijera");
    var x = Math.floor(Math.random()*3);
    var computadora=opciones_computadora[x];
    ronda++;
    console.log(`Ronda ${ronda}`)

    if(usuario=="tijera"){
        switch(computadora){
            case "piedra":
                console.log("Usuario: tijera  Computadora: piedra");
                console.log("Computadora gana!");
                contador_computadora++;
                break;
            case "tijera":
                console.log("Usuario: tijera  Computadora: tijera");
                console.log("Empate!");
                break;
            case "papel":
                console.log("Usuario: tijera  Computadora: papel");
                console.log("Usuario gana!");
                contador_usuario++;
                break;
        }
        } 
    else if(usuario=="piedra"){
        switch(computadora){
            case "piedra":
                console.log("Usuario: piedra  Computadora: piedra");
                console.log("Empate!");
                break;
            case "tijera":
                console.log("Usuario: piedra  Computadora: tijera");
                console.log("Usuario gana!");
                contador_usuario++;
                break;
            case "papel":
                console.log("Usuario: piedra  Computadora: papel");
                console.log("Computadora gana!");
                contador_computadora++;
                break;
    }}
    else if (usuario=="papel"){
        switch(computadora){
            case "piedra":
                console.log("Usuario: papel  Computadora: piedra");
                console.log("Usuario gana!");
                contador_usuario++;
                break;
            case "tijera":
                console.log("Usuario: papel  Computadora: tijera");
                console.log("Computadora gana!");
                contador_computadora++;
                break;
            case "papel":
                console.log("Usuario: papel  Computadora: papel");
                console.log("Computadora gana!");
                break;
    }
    }
    else{
        console.log("Ingrese bien sus datos");
    }
    


}
if(contador_usuario===3){
    console.log("--------------------");
    console.log("Hay un ganador");
    console.log("usuario gana");
}
if (contador_computadora==3){
    console.log("--------------------");
    console.log("Hay un ganador");
    console.log("computadora gana");
}
