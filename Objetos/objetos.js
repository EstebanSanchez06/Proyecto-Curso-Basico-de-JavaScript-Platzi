var miAuto={
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
};

miAuto.marca //regresa "Toyota"
miAuto.año //regres "2020"

var miAuto={
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.año}`);
    }
};

miAuto.detalleDelAuto(); //Auto Corolla 2022
//"this" sirve para acceder al variable global, en este casoo "miAuto"