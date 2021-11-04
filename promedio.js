"use strict";

// Solucion con Ciclo
function calcularPromedioConCiclo(lista) {
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
    sumaLista += lista[i];
}

const promedio = sumaLista / lista.length;
return promedio;
}

// Solucion con Metodo Array
function calcularPromedioConMetodoArray(lista) {
    
const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
    }
);

const promedio = sumaLista / lista.length;
return promedio;
}