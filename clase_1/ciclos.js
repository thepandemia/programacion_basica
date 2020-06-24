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

// Nota: Importante está obsoleta
// for each (variable in objeto)
  // sentencia
var sum = 0;
var obj = {prop1: 5, prop2: 13, prop3: 8};
for each (var item in obj) {
  sum += item;
}
print(sum); // imprime "26", que es 5+13+8

// ForEach
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
  n ++;
  x += n;
  console.log(n);
}

// Ciclo do...while
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);