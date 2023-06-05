/*CUADRADO */ 
let perimSquare = (side) => side * 4;
let areaSquare = (side) => side * side ;

function calculatePerimSquare(){
    let inputSide = document.getElementById('inputSide');
    let value = Number(inputSide.value);

    let result = `El Perimetro de Cuadrado es : ${perimSquare(value)} Cm  `;
    document.getElementById('result').innerHTML = result;
}

function calculateAreaSquare(){
    let inputSide = document.getElementById('inputSide');
    let value = Number(inputSide.value);

    let result = `El Area del Cuadrado es : ${areaSquare(value)} Cm^2  `;
    document.getElementById('result').innerHTML = result;
}

/* TRIANGULO*/ 
let perimTriangle = (side1, side2, base) => side1 + side2 + base;
let areaTriangle = (base, height) => (base * height) / 2;

function calculetePerimTriangle(){
    let side1 = document.getElementById('inputSide1');
    let side2 = document.getElementById('inputSide2');
    let side3 = document.getElementById('inputSide3');
    side1 = Number(side1.value);
    side2 = Number(side2.value);
    side3 = Number(side3.value);
    
    let result = `El perímetro de Triangulo es: ${perimTriangle(side1, side2, side3)} Cm `;
    document.getElementById('result').innerHTML = result;
}

function calculeteAreaTriangle(){
    let base = document.getElementById('inputBase');
    let height = document.getElementById('inputHeight');
    base = Number(base.value);
    height = Number(height.value);
    
    const result = `El área de Triangulo es: ${areaTriangle(base, height)} Cm^2`;
    document.getElementById('result').innerHTML = result;

}

/* CIRCULO  */
const diameCircle = (radio)=>radio*2;
const perimCicle = (radio) => diameCircle(radio) * Math.PI;
const areaCircle = (radio) => (radio * radio) * Math.PI;

function calculateDiameCircle(){
    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);
    
    const result = `El diámetro de Circulo es: ${diameCircle(radio)} Cm`;
    document.getElementById('result').innerHTML = result;
}
 
function calculatePerimCircle(){
    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);
    
    const result = `El perímetro de Circulo es: ${perimCicle(radio)} Cm`;
    document.getElementById('result').innerHTML = result;
}
 
function calculateAreaCircle(){
    let radio = document.getElementById('inputRadio');
    radio = Number(radio.value);
    
    const result = `El área de Circulo es: ${areaCircle(radio)} Cm^2`;
    document.getElementById('result').innerHTML = result;
}