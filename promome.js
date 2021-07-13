const lista1 = [
    100,
    200,
    300,
    500,
    1,
    2,
    100,
    100
];

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    ); 

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function calcularMedia(lista) {

    lista.sort(function(a, b) {
    return a - b;
    });

    const mitadLista1 = parseInt(lista.length / 2);

    let mediana;

    if(esPar(lista1.length)) {
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1];

        const promedia = calcularMediaAritmetica([
            elemento1,elemento2
        ])

        mediana = promedia;
    }else {
        mediana = lista1[mitadLista1];
    }
    return mediana;

}


function esPar(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}


function calcularModa(lista1) {
    const lista1Count = {};

    lista1.map(
        function (elemento) {
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }  
        }
    );

    const lista1Array = Object.entries(lista1Count).sort(
        function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];  
        }
    );

    const moda = lista1Array[lista1Array.length - 1];

    return moda;
}


const listaMGeometrica = [
    1,2,3,4,5,9
];

function calcularMGeometrica (listaMGeometrica) {

    const mulLista = listaMGeometrica.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado * nuevoElemento;
        }
    );

    const mGeo = mulLista**(1/listaMGeometrica.length);

    console.log(`la media geometrica de los numeros dados es ${mGeo}`);

}
