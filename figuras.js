console.log("Hola Grupo");

// Cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Triángulo

console.group("Triángulos");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base,altura) {
    return  (base * altura) / 2;
}

console.groupEnd();

// Circulos.
 console.group("Circulos");

// Diámetro
function diametroCirculo (radio) {
    return  radio * 2;
}

// PI
// const PI = 3.1415;
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

// Circunferencia
function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
function areaCirculo (radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    alert("el perimetro del cuadrado es " + perimetro);
}

function calcularareaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);

    alert("el perimetro del cuadrado es " + perimetro);
}


function calcularAlturaTriangulo () {
    const tLado1 = document.getElementById("InputTLado1").value;
    const tLado2 = document.getElementById("InputTLado2").value;
    const tBase = document.getElementById("InputTBase").value;

    // Se valida que los campos tengan datos.
    if(tLado1 === "" || tLado2 === "" || !tBase === ""){
        alert("Por favor diligencia todos los campos para calcular la altura del triángulo.");
    }
    // Se valida que los lados izquierdo y derecho sean iguales, debe ser un triángulo isósceles.
    else if(tLado1 === tLado2 && tLado1 != tBase){
        const alturaT = Math.sqrt(tLado1**2 - tBase**2/ 4);
        alert("La altura del triángulo es: " + alturaT);        
    }

}
