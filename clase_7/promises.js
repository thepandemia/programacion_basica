//  Promesas
const Promesas = () => {
  return new Promise((resolve, reject) => {
    if(false) setTimeout(() => resolve ('hola'), 1000)
    else reject('Oh :( no hay respuesta')
  })
}

// Promesas()
//   .then(data => console.log(data))
//   .then(() => console.log('Esto es un segundo paso'))
//   .catch(err => console.log(err))
//   .finally(() => console.log('Termina pross'))

  const waitPromesas = async () => {
    try {
      let resultado = await Promesas()
      console.log(resultado)
    } catch (e) {
      console.log(e, 'Ups')
    }
  }

  waitPromesas()

