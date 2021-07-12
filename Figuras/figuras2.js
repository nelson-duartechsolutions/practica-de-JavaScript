/* Código del Cuadrado */

console.group("Cuadrados");

/* const ladoCuadrado = 5; 
console.log(
  "Los lados del cuadrado miden: " 
  + ladoCuadrado 
  +"cm " 
  + "cada uno" 
); */

function perimetroCuadrado (lado){
  return lado * 4;
}

/* console.log(
  "El perímetro del cuadrado es: " 
  + perimetroCuadrado 
  + "cm"
); */

function areaCuadrado (lado){
  return lado * lado;
}

/* console.log(
  "El área del cuadrado es: " 
  + areaCuadrado 
  + "cm^2"
); */

console.groupEnd();

/* Código del Triángulo */

console.group("Triángulos");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
  "Los lados del triángulo miden: " 
  + ladoTriangulo1 
  +"cm, " 
  + ladoTriangulo2 
  +"cm, "
  + baseTriangulo 
  +"cm, "
);

console.log(
  "la altura del Triángulo es de: " 
  + alturaTriangulo 
  +"cm "
); */

function perimetroTriangulo(lado1,lado2, base){
  return lado1 + lado2 + base;
} 
/* 
= ladoTriangulo1 + ladoTriangulo2 + baseTriangulo ; */
/* console.log(
  "El perímetro del Triángulo es: " 
  + perimetroTriangulo 
  + "cm "
); */


function areaTriangulo(base, altura){
  return (base * altura) / 2;
}
/*  = (baseTriangulo * alturaTriangulo) / 2 ;
console.log(
  "El área del Triángulo es: " 
  + areaTriangulo 
  + "cm^2"
  );
 */
console.groupEnd();

/* código del Círculo */

console.group("Círculo");

/* const radioCirculo = 4;
console.log(
  "el Radio del Círculo es: " 
  + radioCirculo
  + "cm "
); */

function diametroCirculo(radio){
  return radio * 2;
}

/*  = radioCirculo * 2;
console.log(
  "el Diámetro del Círculo es: " 
  + diametroCirculo
  + "cm "
);
 */
/* 
const PI = Math.PI;
console.log(
  "el de PI es: " 
  + PI
  ); */

function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * Math.PI;
} 
/* = diametroCirculo * PI;
console.log(
  "el Perímetro del Círculo es: " 
  + perimetroCirculo
  + "cm "
);
 */
function areaCirculo(radio){
  return (radio * radio) * Math.PI;
} 

/* = (radioCirculo * radioCirculo) * PI;
console.log(
  "el área del Círculo es: " 
  + areaCirculo
  + "cm^2 "
  );
 */
console.groupEnd();