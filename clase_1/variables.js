// Introducción a las variables

// Globales
var variable = 1; // numérica
var variable = '1'; // String
var variable = true; // Booleana

console.log(`la variable es: ${variable}`);

// Locales
let variable = 1; // numérica
let variable = '1'; // String
let variable = true; // Booleana

// Constantes - inmutables
const variable = 1; // numérica
const variable = '1'; // String
const variable = true; // Booleana

// Scope [Alcance]
let varGloLet = 'Esto esta mal ejecutado'

{
  var globalVar = 'Esto es una variable global'
}

{
  let noGlobalVar = 'Esto no es una variable global'
  console.log(`La variable global dice: ${noGlobalVar}`)
}

console.log(`La variable global dice: ${globalVar}`)
// console.log(`La variable global dice: ${noGlobalVar}`)
console.log(`La variable global dice: ${varGloLet}`)
