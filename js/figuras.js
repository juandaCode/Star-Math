"use strict";


function mostrarFiguras() {
    document.getElementById("mainFiguras").style.display = 'block';

}
console.log("Hello World");

//Codigo del Cuadrado
    console.group("Cuadrados");
    //const ladoCuadrado = 5;
    //const perimetroCuadrado = ladoCuadrado * 4;
    //const areaCuadrado = ladoCuadrado * ladoCuadrado;
    console.log("El perimetro del cuadrado es: " + perimetroCuadrado(48) + "cm");
    console.log("El perimetro del cuadrado es: " + areaCuadrado(35) + "cm2");
    console.groupEnd();
    //Funciones Cuadrado
    function perimetroCuadrado(lado){
        return lado * 4;
    }

    function areaCuadrado(lado){
        return lado * lado;
    }
    perimetroCuadrado(48);
    areaCuadrado(35);

//Codigo del Triangulo
    console.group("Triángulos");
    /*const ladoTriangulo1 = 5;
    const ladoTriangulo2 = 7;
    const baseTriangulo = 4;
    const alturaTriangulo = 5.5;*/

    function perimetroTriangulo( lado1 , lado2 , base){
        return lado1 + lado2 + base;
    }
    function areaTriangulo (base, altura ){
        return base * altura / 2;
    }
    console.log("El perimetro del triangulo es: " + perimetroTriangulo(6, 9, 12));
    console.log("El area del triangulo es: " + areaTriangulo(8, 15));
    console.groupEnd();

//Codigo del Circulo
    console.group("Circulos");
    //const radioCirculo = 4;
    const PI = Math.PI;
    function diametroCirculo( radio){
        return radio * 2;
    }
    //Circunferencia
   function perimetroCirculo(radio){
       const diametro = diametroCirculo(radio);
        return diametro * PI;
    }
    function areaCirculo(radio){
        return Math.pow(2, radio) * PI;
    }
    console.log("El perimetro del circulo es: " + diametroCirculo(8));
    console.log("El perimetro del circulo es: " + perimetroCirculo(13));
    console.log("El area del circulo es: " + areaCirculo(6));
    console.groupEnd();

    //Interaccion con HTML
    function calcularPerimetroCuadrado(){
        const input = document.getElementById("inputCuadrado");
        const value = input.value;
        const perimetro = perimetroCuadrado(value);
        console.log( perimetro);
    }
    function calcularAreaCuadrado(){
        const input = document.getElementById("inputCuadrado");
        const value = input.value;
        const area = areaCuadrado(value);
        document.getElementById("respuestaCuadrado").innerHTML = "El area es: " + area;
    }
