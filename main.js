//Cuadrado
function formulaCuadrado(lado){
    lado = Number(prompt("Ingresa el lado del cuadrado",0));
    console.log(lado*lado);
}
console.log("El area del Cuadrado es:");
formulaCuadrado();

//Rectangulo
function formulaAreaRectangulo(base,altura){
    base = Number(prompt("Ingresa la base del rectangulo",0));
    altura = Number(prompt("Ingresa la altura del rectangulo",0));
    console.log(base*altura);
}
console.log("El area del rectangulo es:");
formulaAreaRectangulo();

//Triangulo
function formulaTriangulo(baset,alturat){
    baset = Number(prompt("Ingresa la base del triangulo",0));
    alturat = Number(prompt("Ingresa la altura del triangulo",0));
    var resultado = (baset*alturat);
    console.log(resultado/2);
}
console.log("El area del triangulo es:");
formulaTriangulo();

//Rombo
function formulaTriangulo(baser,alturar){
    baser = Number(prompt("Ingresa el diangole mayor del rombo",0));
    alturar = Number(prompt("Ingresa el diangole menor del rombo",0));
    var resultado = (baset*alturat);
    console.log(resultado/2);
}
console.log("El area del rombo es:");
formulaTriangulo();

//Trapecio
function formulaTrapecio(bmenor,bmayor,alt){
    bmenor = Number(prompt("Ingresa la base menor del trapecio",0));
    bmayor = Number(prompt("Ingresa la base mayor del trapecio",0));
    alt = Number(prompt("Ingresa la altura del trapecio",0));
    console.log((bmenor+bmayor)/alt);
}
console.log("El area del trapecio es:");
formulaTrapecio();