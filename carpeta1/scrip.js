class  instrumento{
    constructor(nombre, tipoInstrumento, marca){
        this.nombre = nombre;
        this.tipoInstrumento = tipoInstrumento;
        this.marca= marca;
    }
    tocar(){
        return console.log(`${this.nombre} se está tocando un ${this.tipoInstrumento}`);
    }
}

class  Piano extends instrumento {
    tocar(){
        return console.log(`El ${this.nombre} toca un instrumento  es un ${this.tipoInstrumento} siendo de la marca ${this.marca}`);
    }
}


class  guitarra extends instrumento {
    tocar(){
        return console.log(`El ${this.nombre} toca un instrumento es una  ${this.tipoInstrumento} siendo de la marca ${this.marca}`);
    }
}


class  bateria extends instrumento {
    tocar(){
        return console.log(`El ${this.nombre} es de ${this.tipoInstrumento} siendo de la marca ${this.marca}`);
    }
}

let  piano = new Piano("Don", "piano", "Fender");

let  gtr = new guitarra ("Don", "guitarra eléctrica", "Ibanez");


piano.tocar();
gtr.tocar();

class botas {
    constructor(marca, talla, precio){
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    venta(){
        return console.log(`Usted a adquirido un par de botas de la marca ${this.marca}, con una talla de ${this.talla}. El precio fue de $${this.precio}`);
    }
}

class  botasDeMusico extends botas{
    venta() {
        return console.log(`Vendiendo una par de botas de ${this.marca}, tamaño ${this.talla}`);
    }
}


class  botasDeVaquera extends botas{
    venta() {
        return console.log(`Vendiendo una par de botas de ${this.marca}, tamaño ${this.talla}`);
    }
}


let botas1 = new botasDeMusico("Nike", "40", "$150")
let botas2 = new botasDeVaquera("Cosmic Cowboy Boots", "46", "$170")
botas1.venta();
botas2.venta();