// variables
var name = "mauricio"
let lastName = "duque"
const nickName = "Mauro"
var arr = new Array()
var arr = []
var arr = [0, 2, 30, 40, 55]
console.log(`El arr tiene: ${arr.length} elementos`)

//  index = 0, va hasta 5, conteo va uno en uno
for (let index = 0; index < arr.length; index++) {
  if(index !== 2) console.log(`Nuestro arr en la posicion ${index} vale ${arr[index]}`)
  else if(index === 2) console.log('Es 30')
}

arr.forEach((elemento, index) => console.log(`Index: ${index}, elemento: ${elemento}`))

const plotName = () => console.log(name)

plotName()