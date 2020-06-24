// Condicionales
// Ciclo for
// for ([expresion-inicial]; [condicion]; [expresion-final])sentencia

var array = [0, 20, 30, 44];
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);  
}

// For in
// for (variable in objeto) { ... }

var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Nota: Importante está obsoleta E6
// for each (variable in objeto)
  // sentencia
var sum = 0;
var obj = {prop1: 5, prop2: 13, prop3: 8};
for each (var item in obj) {
  sum += item;
}
print(sum); // imprime "26", que es 5+13+8

// ForEach solo para arreglos
var arr = [0, 10, 11, 12, 33, 44];
arr.forEach((elemento, index) => {
  console.log(elemento, index)
})

// --------------------------------------------------------------------------------
// Ciclo while
// while (condicion)
//   sentencia
n = 0;
x = 0;
while (n < 3) {
  n ++; // Cuidado si esto no existe se va al infinito
  x += n;
  console.log(n, x);
}

// Ciclo do...while
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);

// Tarea:
// 1. Consultar el método de la borbuja
// [0, 1, 2, 3, 4] - console.log() -> [4, 3, 2, 1, 0]