/* Código del Cuadrado */

console.group("Cuadrados");


function perimetroCuadrado (lado){
  return lado * 4;
}

function areaCuadrado (lado){
  return lado * lado;
}

console.groupEnd();

/* Código del Triángulo */

console.group("Triángulos");

function perimetroTriangulo(lado1,lado2, base){
  return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura){
  return (base * altura) / 2;
}

console.groupEnd();

/* código del Círculo */

console.group("Círculo");

function diametroCirculo(radio){
  return radio * 2;
}

function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * Math.PI;
} 

function areaCirculo(radio){
  return (radio * radio) * Math.PI;
} 

console.groupEnd();




/* interaccion con html */
/* /////////////////////////////////////////////////////////////// */

function calcularPerimetroCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
    alert ("El perímetro es " + perimetro +"cm"); 
}

function calcularAreaCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
    alert ("El perímetro es " + area +"cm²"); 
}
/* ########################################################## */

function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById('inputLado1');
  const inputLado2 = document.getElementById('inputLado2');
  const inputBase = document.getElementById('inputBase');
  const valueLado1 = Number(inputLado1.value);
  const valueLado2 = Number(inputLado2.value);
  const valueBase = Number(inputBase.value);

  const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);

  alert('El perimetro es: ' + perimetro + 'cm');
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById('inputBase');
  const inputAltura = document.getElementById('inputHaltura');
  const valueBase = inputBase.value;
  const valueAltura = inputAltura.value;
  const area = areaTriangulo(valueBase, valueAltura);

  alert('El área es: ' + area + 'cm²');
}

/* ********************************************** */

function calcularDiametroCirculo() {
  const inputRadio = document.getElementById('inputRadio');

  const valueRadio = Number(inputRadio.value);

  const diametro = diametroCirculo(valueRadio);

  alert('El diametro es: ' + diametro + 'cm');
}

function calcularPerimetroCirculo() {
  const inputRadio = document.getElementById('inputRadio');

  const valueRadio = Number(inputRadio.value);

  const perimetro = perimetroCirculo(valueRadio);

  alert('El perimetro es: ' + perimetro + 'cm');
}

function calcularAreaCirculo() {
  const inputRadio = document.getElementById('inputRadio');

  const valueRadio = Number(inputRadio.value);

  const area = areaCirculo(valueRadio);

  alert('El área es: ' + area + 'cm');
}