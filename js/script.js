
let numA = 8;
const numB = 6;
const numStr = '8';


console.log(typeof numA)
console.log(typeof numStr)

if(numA < numB){
  console.log('il numero A è inferiore a B')
}else{
  console.log('il numero a non è inferiore')
}

if(numA < numB){
  console.log('il numero A è inferiore a B')
} else if (numA > numB){   // di condizioni else if ce ne possono essere più di ua
  console.log('il numero A è maggiore di B')
}else{
  console.log('il numero A e numero B sono uguali')
}

if(numA != numB){
  console.log('il numero A diverso da B')
}else{
  console.log('A e B sono uguali')
}

// === confronto solo il valore anche e non il tipo di dato
if(numA == numStr){
  console.log('numA e numStr sono uguali anche se di tipo diverso');
}

// === confronto oltre al valore anche il tipo di dato -> BEST
if(numA === numStr){
  console.log('...');
}else{
  console.log('numA e numStr anche se sono uguali di valore non sono uguali come tipo');
}

const oggiSole = false;
const oggiPiove = false;
console.log(typeof oggiSole)

if(oggiSole){
  console.log('oggi c\'è il sole')
}else{
  console.log('oggi non c\'è il sole')
}

if(oggiSole == true){
  console.log('oggi c\'è il sole')
}else{
  console.log('oggi non c\'è il sole')
}

// ! = not, un dato true diventa false e viceversa
if(!oggiPiove){
  console.log('oggi c\'è il sole')
}else{
  console.log('oggi non c\'è il sole')
}

// == e === sono operatori di confronto. Resituiscono true o false
if(oggiPiove == false){
  console.log('oggi c\'è il sole')
}else{
  console.log('oggi non c\'è il sole')
}

const numeroX = 0;
// 0 o false sono la stessa cosa
if(numeroX){
  console.log('A')
}else{
  console.log('B')
}

const elementoX = undefined;

if(elementoX){
  console.log('A')
}else{
  console.log('B')
}

const elementoY = null;

if(elementoY){
  console.log('A')
}else{
  console.log('B')
}

// null, undefined e 0 sono false. Tutto il resto è true

const primoNum = 16;
const secondoNum = 3;

// % = modulo. Divide i due numeri e restituisce il resto
// si usa per verifica se un umero è divisibile per un altro numero
console.log(primoNum % secondoNum);


// primoNum è divisibile per 2, è pari?
if(primoNum % 2 === 0){
  console.log('il numero è pari')
}else{
  console.log('il numero è dispari')
}

if(primoNum % 2){
  console.log('il numero è dispari')
}else{
  console.log('il numero è pari')
}

if(!(primoNum % 2)){
  console.log('il numero è pari')
}else{
  console.log('il numero è dispari')
}

//// NUMERI RANDOM

const floatNum = 5.5;

// arrotondo per eccessso
console.log(Math.ceil(floatNum));
// arrotondo per difetto
console.log(Math.floor(floatNum));
// arrotondo 
console.log(Math.round(floatNum));

// estraggo da 1 a 5 
console.log(Math.ceil(Math.random() * 5));
console.log(Math.ceil(Math.random() * 5));
console.log(Math.ceil(Math.random() * 5));
console.log(Math.ceil(Math.random() * 5));
console.log(Math.ceil(Math.random() * 5));
console.log(Math.ceil(Math.random() * 5));
console.log(Math.ceil(Math.random() * 5));
console.log(Math.ceil(Math.random() * 5));
console.log(Math.ceil(Math.random() * 5));
console.log(Math.ceil(Math.random() * 5));
console.log(Math.ceil(Math.random() * 5));
console.log(Math.ceil(Math.random() * 5));
console.log(Math.ceil(Math.random() * 5));
console.log(Math.ceil(Math.random() * 5));
console.log(Math.floor(Math.random() * 5) + 1);
console.log(Math.floor(Math.random() * 5) + 1);
console.log(Math.floor(Math.random() * 5) + 1);
console.log(Math.floor(Math.random() * 5) + 1);
console.log(Math.floor(Math.random() * 5) + 1);
console.log(Math.floor(Math.random() * 5) + 1);
console.log(Math.floor(Math.random() * 5) + 1);
console.log(Math.floor(Math.random() * 5) + 1);
console.log(Math.floor(Math.random() * 5) + 1);
console.log(Math.floor(Math.random() * 5) + 1);
console.log(Math.floor(Math.random() * 5) + 1);
console.log(Math.floor(Math.random() * 5) + 1);

const min = 10;
const max = 15;

// formunla per estrarre un numero random da un minimo a un massimo
const numeroRandom = Math.floor(Math.random() * (max - min + 1) + min);
console.log(numeroRandom)
