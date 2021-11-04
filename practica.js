
function Auto(marca, velocidad){
    this.marca = marca;
    this.velocidad = velocidad;
}

var nuevoAuto = new Auto("Ferrari", 200);
console.log("------------Ejemplo-------------")
console.log("Nuevo auto: " + nuevoAuto.marca);
console.log("Nuevo auto: " + nuevoAuto.velocidad);
var itera = prompt("Indique la cantidad de autos que desea crear");
var autos = [];
for (var i = 0; i < itera; i++) {
    var marcaAuto = prompt("Indique marca de auto Numero: " + i);
    var velocidadAuto = prompt("Indique velocidad de auto Numero: " + i);
    autos.push(new Auto(marca, velocidad));
}

for(var auto in autos){
    console.log("Su auto es" + auto);
}

var autosFiltrados = autos.filter(function(velocidad){
    return autos.velocidad >= 150;
});
console.log(autosFiltrados);

const nameItems = items.map(item => item.nombre);
console.log(nameItems);

var encontrarArticulo = articulos.find(function(articulo){
    return articulo.nombre ==="Laptop" // este es mas preciso por que retorna el articulo con su precio
});

// forma de recorrer un array list con el metodo foreach
articulos.forEach(function(articulo){
    console.log(articulo.nombre)// retorna todos los nombres de los articulos que existen
});

// forma de recorrer un array list con el metodo some
// retorna un boleano que nos comprueba si existe o no
var aticulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=1700;
})

