"use strict";

function calcularPromedioConMetodoArray(lista) {
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedio = sumaLista / lista.length;
    return promedio;
    }


function calcularMediana(lista) {
    const listaOrdenada = lista.sort((a, b) => a - b);

    const mitadLista = parseInt(listaOrdenada.length / 2);

    if(esPar(lista.length)) {
        const elemento1 = listaOrdenada[mitadLista - 1];
        const elemento2 = listaOrdenada[mitadLista];
        const promedioElementos = calcularPromedioConMetodoArray([
            elemento1, elemento2
    ]);
        mediana = promedioElementos;
    }
    else {
        mediana = listaOrdenada[mitadLista];
    }
}

function esPar(numerito) {
    if(numerito % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

