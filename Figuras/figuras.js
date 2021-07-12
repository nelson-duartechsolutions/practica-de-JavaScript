/* Código del Cuadrado */

console.group("Cuadrados");
/* #### inicia #### Se utiliza para encapsular los "console" */

const ladoCuadrado = 5; /* variable constante  */
console.log(
  "Los lados del cuadrado miden: " 
  + ladoCuadrado 
  +"cm " 
  + "cada uno" 
);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(
  "El perímetro del cuadrado es: " 
  + perimetroCuadrado 
  + "cm"
);


const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(
  "El área del cuadrado es: " 
  + areaCuadrado 
  + "cm^2"
);

console.groupEnd();

/* Código del Triángulo */

console.group("Triángulos");

const ladoTriangulo1 = 6;
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
);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo ;
console.log(
  "El perímetro del Triángulo es: " 
  + perimetroTriangulo 
  + "cm "
);


const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2 ;
console.log(
  "El área del Triángulo es: " 
  + areaTriangulo 
  + "cm^2"
  );

console.groupEnd();

/* código del Círculo */

console.group("Círculo");

const radioCirculo = 4;
console.log(
  "el Radio del Círculo es: " 
  + radioCirculo
  + "cm "
);

const diametroCirculo = radioCirculo * 2;
console.log(
  "el Diámetro del Círculo es: " 
  + diametroCirculo
  + "cm "
);


const PI = Math.PI;
console.log(
  "el de PI es: " 
  + PI
  );

const perimetroCirculo = diametroCirculo * PI;
console.log(
  "el Perímetro del Círculo es: " 
  + perimetroCirculo
  + "cm "
);

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log(
  "el área del Círculo es: " 
  + areaCirculo
  + "cm^2 "
  );

console.groupEnd();