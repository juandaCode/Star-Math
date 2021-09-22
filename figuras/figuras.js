"use strict";

console.log("Hello World");

//Codigo del Cuadrado
    console.group("Cuadrados")
    const ladoCuadrado = 5;
    const perimetroCuadrado = ladoCuadrado * 4;
    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
    console.log("El perimetro del cuadrado es: " + areaCuadrado + "cm2");
    console.groupEnd();

//Codigo del Triangulo
    console.group("Triángulos");
    const ladoTriangulo1 = 5;
    const ladoTriangulo2 = 7;
    const baseTriangulo = 4;
    const alturaTriangulo = 5.5;
    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2; + baseTriangulo;
    const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    console.log("El perimetro del triangulo es: " + perimetroTriangulo);
    console.log("El area del triangulo es: " + areaTriangulo);
    console.groupEnd();

//Codigo del Circulo
    console.group("Circulos");
    const radioCirculo = 4;
    const PI = Math.PI;
    const diametroCirculo = radioCirculo * 2;
    const perimetroCirculo = diametroCirculo * PI;
    const areaCirculo = Math.pow(2, radioCirculo) * PI;

    
    console.log("El perimetro del circulo es: " + perimetroCirculo);
    console.log("El area del circulo es: " + areaCirculo);
    console.groupEnd();