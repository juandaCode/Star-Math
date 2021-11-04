
function calcularModa(lista) {
    const lista1 = [
        1,4,6,7,5,4,3,2,6,7,7,5,3,7,9,8,7
    ];
    const lista1Count = { };
    
    lista1.map(
        function(elemento) {
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1;
            }
            else {
                lista1Count[elemento];
            }
        }
    );
    const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    
    const moda = lista1Array[lista1Array.length - 1];
}
    