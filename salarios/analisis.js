const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularPromedioConMetodoArray(lista) {
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedio = sumaLista / lista.length;
    return promedio;
    }

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

}
if(esPar(lista.length)) {

    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];

    const mediana = calcularPromedioConMetodoArray([personaMitad1, personaMitad2]);
    return mediana;
}
else {
    const personaMitad = lista[mitad];
    return personaMitad;
}

console.log(medianaSalarios(salariosColSorted));